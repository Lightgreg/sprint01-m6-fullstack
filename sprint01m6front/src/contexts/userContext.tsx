/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import api from "../services/api"; 
import { FieldErrors, FieldErrorsImpl, FieldValues, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  id?: number;
  name: string;
  email: string;
  password?: string;
  phone: string;
  createdAt?: string;
}

export interface iLogin{
  email: string;
  password: string;
}

export interface iUserContext {
  user: iUser | null;
  userLogin(data: iLogin): void;
  handleLogin: UseFormHandleSubmit<iLogin>
  login: UseFormRegister<iLogin>
  register: UseFormRegister<iUser>
  userRegister (data: iUser): void;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  handleSubmit: UseFormHandleSubmit<iUser>
  error: FieldErrors<iLogin>
  errors: Partial<FieldErrorsImpl<{
    name: string;
    email: string;
    password: string;
    phone: string;
  }>>
  returnLogin: () => void
  registerPage:()=>void
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserProviderProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState<iUser | null>(null)  

  const Schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatorio'),
    email: yup.string().required('Email é obrigatorio'),
    password: yup.string().required('Senha é obrigatorio').min(6, 'Senha no minimo de 6 caracteres'),
    phone: yup.string().required('Numero é obrigatorio'),
  })

  const formSchema = yup.object().shape({
    email: yup.string().required('Email é obrigatorio'),
    password: yup.string().required('Senha é obrigatorio')
  });

  const { register, handleSubmit, formState: { errors } } = useForm<iUser>({
    resolver: yupResolver(Schema)
  });

  const { register: login, handleSubmit: handleLogin, formState: { errors: error } } = useForm<iLogin>({
    resolver: yupResolver(formSchema),
  });

  function userRegister(data: iUser) {
    api
      .post('users',data)
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

  const returnLogin = () => {
    navigate("login")
  } 
  const registerPage = () => {
    navigate("register")
  }

  function userLogin(data: iLogin) {
    api
      .post('login', data)      
      .then((res) => {
        localStorage.setItem("@MyList:USERID", res.data.id);
        localStorage.setItem("@MyList:TOKEN", res.data.token);
        const token = localStorage.getItem('@MyList:TOKEN')
        api.defaults.headers.authorization = `Bearer ${token}`
        toast.success('Usuario logado com sucesso')
        setTimeout(() => {
          navigate('dashboard', { replace: true })
        }, 500);
      })
      .catch((err: any) => {
        console.log(err)
        toast.error('Usuario ou senha invalidos')
      })
  }

  return (
    <UserContext.Provider value={({ user, setUser, userLogin, handleLogin, returnLogin, userRegister, login, handleSubmit, register, error, errors, registerPage })}>
      {children}
    </UserContext.Provider>
  )
}
