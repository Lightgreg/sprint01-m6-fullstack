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
// import { ModalContext } from "../../contexts/modalContext"

function Dashboard() {
  const { signOut, listContactes, userinfos, seeCreateContacteModal, openOrCloseModal, seePerfilModal, seeEditModal, seeItensModal, setseeItensModal, seeDeleteModal, submitEditContacte, editContacte } = useContext(UserContext)
  // const { } = useContext(ModalContext)  

  function setInfos(infos: iUser | iContacte | null, modal:string ) {
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
            <button className="leftSquareBtn perfil" onClick={() => setInfos(userinfos,'perfil')}>Perfil</button>
            <button className="leftSquareBtn exit" onClick={() => signOut()}>Sair</button>
          </section>
          <ul className="rightSquare">
            {listContactes.length > 0 ? (
              listContactes.map((e: iContacte) =>
                <Card {...e} key={e.id} click={()=>setInfos(e,'perfil')} />)
            ) : (<h1>Adicione contatos para poder visualizalos aqui em lista.</h1>)}
          </ul>

        </DashContainer>
      </Backgroundscreen>
      {!!seeCreateContacteModal && < ContacteModal />}
      {!!seeEditModal && < EditModal submit={submitEditContacte(editContacte)}/>}
      {!!seeDeleteModal && < DeleteModal {...seeItensModal} />}
      {!!seePerfilModal && < PerfilModal {...seeItensModal} />}
    </>
  )
}

export default Dashboard