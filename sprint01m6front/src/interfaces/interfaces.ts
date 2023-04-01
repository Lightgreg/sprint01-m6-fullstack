import { UseFormHandleSubmit } from "react-hook-form";
import { FieldErrors, FieldErrorsImpl, UseFormRegister } from "react-hook-form/dist/types";

export  interface iProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  user: boolean;
  id?: string;
  name: string;
  email: string;
  password?: string;
  phone: string;
  createdAt?: string;
  contactes?: iContacte[];
}
export interface iEditUser {
  user: boolean;
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  phone?: string;
  createdAt?: string;
  contactes?: iContacte[];
}

export interface iLogin {
  email: string;
  password: string;
}

export interface iContacte {
  user: boolean;
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
}
export interface iEditContacte {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  createdAt?: string;
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
  userinfos: iUser | undefined;
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
  refreshPage(id: string | null): void
  setuserinfos: React.Dispatch<React.SetStateAction<iUser | undefined>>
  setlistContactes: React.Dispatch<React.SetStateAction<iContacte[] | []>>
  registerEditUser: UseFormRegister<iEditUser>
  submitEditUser: UseFormHandleSubmit<iEditUser>
  editUserError: FieldErrors<iEditUser>
  editUser(data: iEditContacte): void
  deleteUser(): void

  // ---------MODAIS----------
  seeCreateContacteModal: boolean
  seePerfilModal: boolean
  seeEditModal: boolean
  seeDeleteModal: boolean
  seeEditUserModal: boolean
  openOrCloseModal: (modal: string, change: boolean) => void
  seeItensModal: iUser | iContacte | null
  setseeItensModal: React.Dispatch<React.SetStateAction<iUser | iContacte | null>>
  changeModal(modal01: string, modal02: string): void
  // --------------CONTACTES---------
  registerContacte: UseFormRegister<iContacte>
  submitContacte: UseFormHandleSubmit<iContacte>
  contacteError: FieldErrors<iContacte>
  deleteItem(id: string | undefined): void
  createContacte(data: iContacte): void
  registerEditContacte: UseFormRegister<iEditContacte>
  submitEditContacte: UseFormHandleSubmit<iEditContacte>
  editContacteError: FieldErrors<iContacte>
  editContacte(data: iEditContacte): void
}

// export interface iModalContext {
//   seeCreateContacteModal: boolean
//   seePerfilModal: boolean
//   seeEditModal: boolean
//   seeDeleteModal: boolean
//   seeEditUserModal: boolean
//   openOrCloseModal: (modal: string , change: boolean) => void
//   seeItensModal: iUser | iContacte | null
//   setseeItensModal: React.Dispatch<React.SetStateAction<iUser | iContacte | null>>
//   changeModal(modal01: string, modal02: string): void
// }

// export interface iContacteContext {
//   registerContacte: UseFormRegister<iContacte>
//   submitContacte: UseFormHandleSubmit<iContacte>
//   contacteError: FieldErrors<iContacte> 
//   deleteItem(id: string | undefined): void
//   createContacte(data: iContacte): void
// }

