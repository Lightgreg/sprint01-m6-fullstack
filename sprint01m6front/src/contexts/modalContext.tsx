/* eslint-disable eqeqeq */
import { createContext, useState } from "react";
import { iContacte, iModalContext, iProviderProps, iUser } from "../interfaces/interfaces";

export const ModalContext = createContext<iModalContext>(
  {} as iModalContext
);

export function ModalProvider({ children }: iProviderProps) {
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
    <ModalContext.Provider value={({ seeCreateContacteModal, seePerfilModal, seeEditModal, seeDeleteModal, seeEditUserModal, openOrCloseModal, seeItensModal, setseeItensModal, changeModal })}>
      {children}
    </ModalContext.Provider>
  )
}