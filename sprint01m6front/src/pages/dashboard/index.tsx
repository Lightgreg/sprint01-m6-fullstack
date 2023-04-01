/* eslint-disable jsx-a11y/img-redundant-alt */
import { useContext, useEffect } from "react"
import { Toaster } from "react-hot-toast"
import Card from "../../components/card"
import { Backgroundscreen } from "../../components/defaultBackground/style"
import { iContacte, iUser } from "../../interfaces/interfaces"
import ContacteModal from "../../components/modais/contacteModal"
import DeleteModal from "../../components/modais/deleteModal"
import EditModal from "../../components/modais/editModal"
import PerfilModal from "../../components/modais/perfilModal"
import { UserContext } from "../../contexts/userContext"
import { Title1 } from "../login/style"
import { DashContainer } from "./style"
import EditUserModal from "../../components/modais/editUserModal"

function Dashboard() {
  const { signOut, listContactes, userinfos, seeCreateContacteModal, openOrCloseModal, seePerfilModal, seeEditModal, seeItensModal, setseeItensModal, seeDeleteModal, submitEditContacte, editContacte, seeEditUserModal, submitEditUser, editUser } = useContext(UserContext)

  function setInfos(infos:any, modal: string, option: boolean) { 
    infos.user = option
    setseeItensModal(infos)
    openOrCloseModal(modal, true)
  }

  return (
    <>
      <Backgroundscreen>
        <Toaster />
        <div className="logoAndHeaderText">
          <h2 className="selectToDelOrEdit">Selecione o contato para excluir ou editar</h2>
        </div>
        <DashContainer>
          <section className="leftSquare">
            <Title1>MyContacts</Title1>
            <span className="userName">{userinfos?.name}</span>
            <div className="imgSquare">
              <img src="https://i.pinimg.com/736x/ae/4c/b4/ae4cb403a50d8234131325e770015099.jpg" alt="photo-user" />
            </div>
            <button className="leftSquareBtn small"
              onClick={() => openOrCloseModal('contacte', true)}>Criar Contato</button>
            <button className="leftSquareBtn perfil" onClick={() => setInfos(userinfos,'perfil',true)}>Perfil</button>
            <button className="leftSquareBtn exit" onClick={() => signOut()}>Sair</button>
          </section>
          <ul className="rightSquare">
            {listContactes.length > 0 ? (
              listContactes.map((e: iContacte) =>
                <Card {...e} key={e.id} click={()=>setInfos(e,'perfil',false)} />)
            ) : (<h1>Adicione contatos para poder visualizalos aqui em lista.</h1>)}
          </ul>

        </DashContainer>
      </Backgroundscreen>
      {!!seeCreateContacteModal && < ContacteModal />}
      {!!seeEditModal && < EditModal submit={submitEditContacte(editContacte)}/>}
      {!!seeEditUserModal && < EditUserModal submit={submitEditUser(editUser)}/>}
      {!!seeDeleteModal && < DeleteModal {...seeItensModal} />}
      {!!seePerfilModal && < PerfilModal {...seeItensModal} />}
    </>
  )
}

export default Dashboard