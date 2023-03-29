/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import api from "../services/api";
import { useForm } from 'react-hook-form';
import { iContacte, iLogin, iProviderProps, iUser, iUserContext } from "../interfaces/interfaces";
import { loginSchema, registerSchema } from "../schemas/schemas";

export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iProviderProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState<iUser | null>(null)
  const [userinfos, setuserinfos] = useState<iUser | null>(null)
  const [listContactes, setlistContactes] = useState<iContacte[] | []>([]) 

  const { register, handleSubmit, formState: { errors } } = useForm<iUser>({
    resolver: yupResolver(registerSchema)
  });

  const { register: login, handleSubmit: handleLogin, formState: { errors: loginError } } = useForm<iLogin>({
    resolver: yupResolver(loginSchema),
  });

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

  async function refreshPage() {
    const id = localStorage.getItem('@MyList:USERID')
    const token = localStorage.getItem('@MyList:TOKEN')

    api.defaults.headers.authorization = `Bearer ${token}`
    await api
      .get(`users/${id}`)
      .then(res => {
        setuserinfos(res.data)
        setlistContactes(res.data.contactes)
      })
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

  function userLogin(data: iLogin) {
    api
      .post('login', data)
      .then((res) => {
        localStorage.setItem("@MyList:USERID", res.data.id);
        localStorage.setItem("@MyList:TOKEN", res.data.token);
        const token = localStorage.getItem('@MyList:TOKEN')
        api.defaults.headers.authorization = `Bearer ${token}`
        setUser(res.data)
        toast.success('Usuario logado com sucesso')
        refreshPage()
        setTimeout(() => {
          navigate('dashboard', { replace: true })
        }, 500);
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

  return (
    <UserContext.Provider value={({ user, setUser, userLogin, handleLogin, returnLogin, userRegister, login, handleSubmit, register, loginError, errors, registerPage, listContactes, userinfos, signOut })}>
      {children}
    </UserContext.Provider>
  )
}
