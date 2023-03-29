import { UseFormHandleSubmit } from "react-hook-form";
import { FieldErrors, FieldErrorsImpl, UseFormRegister } from "react-hook-form/dist/types";

export  interface iProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  id?: string;
  name: string;
  email: string;
  password?: string;
  phone: string;
  createdAt?: string;
  contactes?: iContacte[];
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iContacte {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface iPerfilProps {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  createdAt?: string;
  contactes?: iContacte[];
}

export interface iUserContext {
  user: iUser | null;
  listContactes: iContacte[] | [];
  userinfos: iUser | null;
  userLogin(data: iLogin): void;
  handleLogin: UseFormHandleSubmit<iLogin>
  login: UseFormRegister<iLogin>
  register: UseFormRegister<iUser>
  userRegister(data: iUser): void;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>
  handleSubmit: UseFormHandleSubmit<iUser>
  loginError: FieldErrors<iLogin>
  errors: Partial<FieldErrorsImpl<{
    name: string;
    email: string;
    password: string;
    phone: string;
  }>>
  returnLogin: () => void
  registerPage: () => void
  signOut: () => void
}

export interface iModalContext {
  seeCreateContacteModal: boolean
  seePerfilModal: boolean
  seeEditModal: boolean
  seeDeleteModal: boolean
  seeEditUserModal: boolean
  openOrCloseModal: (modal: string , change: boolean) => void
  seeItensModal: iUser | iContacte | null
  setseeItensModal: React.Dispatch<React.SetStateAction<iUser | iContacte | null>>
  changeModal(modal01: string, modal02: string): void
}

export interface iContacteContext {

}

