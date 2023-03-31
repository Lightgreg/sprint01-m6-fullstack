/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import api from "../services/api";
import { useForm } from 'react-hook-form';
import { iContacte, iEditContacte, iLogin, iProviderProps, iUser, iUserContext } from "../interfaces/interfaces";
import { contacteSchema, editContacteSchema, loginSchema, registerSchema } from "../schemas/schemas";

export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iProviderProps) {

  const navigate = useNavigate()

  const [user, setUser] = useState<iUser | null>(null)
  const [userinfos, setuserinfos] = useState<iUser | undefined >()
  const [listContactes, setlistContactes] = useState<iContacte[] | []>([])

  const { register, handleSubmit, formState: { errors } } = useForm<iUser>({
    resolver: yupResolver(registerSchema)
  });

  const { register: login, handleSubmit: handleLogin, formState: { errors: loginError } } = useForm<iLogin>({
    resolver: yupResolver(loginSchema),
  });

  function refreshPage(id: string | null) {
    // const id = localStorage.getItem('@MyList:USERID')
    const token = localStorage.getItem('@MyList:TOKEN')

    if (id && token) {
      api.defaults.headers.authorization = `Bearer ${token}`
      api
        .get(`users/${id}`)
        .then(res => {
          setuserinfos(res.data)
          setlistContactes(res.data.contactes)
        })
    }
  }

  function userRegister(data: iUser) {
    api
      .post('users', data)
      .then((res) => {
        if (res.data.id) {
          toast.success('Usuario criado com sucesso')
          setTimeout(() => {
            navigate('login', { replace: true })
          }, 500);
        };
      })
      .catch((err: string) => {
        console.log(err)
        toast.error('Algo de errado, não está certo')
      })
  }

  function editUser(data: iEditContacte) {
    const id = localStorage.getItem('@MyList:USERID')
    api
      .patch(`user/${seeItensModal?.id}`, data)
      .then(() => {
        refreshPage(id)
        openOrCloseModal('user', false)
      })
  }

  function deleteUser() {
    const idUser = localStorage.getItem('@MyList:USERID')
    api
      .delete(`user/${idUser}`)
      .then(() => {
        localStorage.removeItem('@MyList:USERID')
        localStorage.removeItem('@MyList:TOKEN')
        setTimeout(() => {
          navigate('/')
        }, 500);
      })
  }

  function toEdit() {
    if (seeItensModal?.user) {
      
    }
  }

  function userLogin(data: iLogin) {
    api
      .post('login', data)
      .then((res) => {
        localStorage.setItem("@MyList:USERID", res.data.id);
        localStorage.setItem("@MyList:TOKEN", res.data.token);
        api.defaults.headers.authorization = `Bearer ${res.data.token}`
        setUser(res.data)
        toast.success('Usuario logado com sucesso')
        setTimeout(() => {
          navigate('dashboard', { replace: true })
        }, 500);
        refreshPage(res.data.id)
      })
      .catch((err: any) => {
        console.log(err)
        toast.error('Usuario ou senha invalidos')
      })
  }

  const signOut = () => {
    toast('Usuario deslogado!')
    localStorage.removeItem('@MyList:USERID')
    localStorage.removeItem('@MyList:TOKEN')
    setTimeout(() => {
      navigate('/')
    }, 500);
  }

  const returnLogin = () => {
    navigate("login")
  }
  const registerPage = () => {
    navigate("register")
  }

  // ---------CONTACTES-------------

  const { register: registerContacte, handleSubmit: submitContacte, formState: { errors: contacteError } } = useForm<iContacte>({
    resolver: yupResolver(contacteSchema),
  });

  const { register: registerEditContacte, handleSubmit: submitEditContacte, formState: { errors: editContacteError } } = useForm<iEditContacte>({
    resolver: yupResolver(editContacteSchema),
  });

  function createContacte(data: iContacte) {
    const id = localStorage.getItem('@MyList:USERID')
    const token = localStorage.getItem('@MyList:TOKEN')
    api.defaults.headers.authorization = `Bearer ${token}`

    api
      .post('contacte', data)
      .then(() => {
        refreshPage(id)
        openOrCloseModal('contacte', false)
      })
  }

  function editContacte(data: iEditContacte) {
    const id = localStorage.getItem('@MyList:USERID')
    api
      .patch(`contacte/${seeItensModal?.id}`, data)
      .then(() => {
        refreshPage(id)
        openOrCloseModal('editContacte', false)
      })

  }

  function deleteItem(id: string) {
    const idUser = localStorage.getItem('@MyList:USERID')
    api
      .delete(`contacte/${id}`)
      .then(() => { refreshPage(idUser) })
  }

  useEffect(() => {
    const id = localStorage.getItem('@MyList:USERID')
    const token = localStorage.getItem('@MyList:TOKEN')

    if (token) {

      api.defaults.headers.authorization = `Bearer ${token}`
      api
        .get(`users/${id}`)
        .then(res => {
          setuserinfos(res.data)
          navigate('dashboard', { replace: true })
          setlistContactes(res.data.contactes)
        })
    }
  }, [])



  // --------------MODAIS------------  

  const [seeCreateContacteModal, setseeCreateContacteModal] = useState(false);
  const [seePerfilModal, setseePerfilModal] = useState(false);
  const [seeEditModal, setseeEditModal] = useState(false);
  const [seeDeleteModal, setseeDeleteModal] = useState(false);
  const [seeEditUserModal, setseeEditUserModal] = useState(false);
  const [seeItensModal, setseeItensModal] = useState<iUser | iContacte | null>(null);

  function openOrCloseModal(modal: string, change: boolean) {
    if (modal == 'contacte') {
      setseeCreateContacteModal(change)
    }
    if (modal == 'perfil') {
      setseePerfilModal(change)
    }
    if (modal == 'editContacte') {
      setseeEditModal(change)
    }
    if (modal == 'delete') {
      setseeDeleteModal(change)
    }
    if (modal == 'user') {
      setseeEditUserModal(change)
    }
  }

  function changeModal(modal01: string, modal02: string) {
    openOrCloseModal(modal01, false)
    openOrCloseModal(modal02, true)
  }

  return (
    <UserContext.Provider value={({ user, setUser, userLogin, handleLogin, returnLogin, userRegister, login, handleSubmit, register, loginError, errors, registerPage, listContactes, userinfos, signOut, refreshPage, setuserinfos, setlistContactes, registerContacte, submitContacte, contacteError, deleteItem, createContacte, seeCreateContacteModal, seePerfilModal, seeEditModal, seeDeleteModal, seeEditUserModal, openOrCloseModal, seeItensModal, setseeItensModal, changeModal, registerEditContacte, submitEditContacte, editContacteError, editContacte })}>
      {children}
    </UserContext.Provider>
  )
}
