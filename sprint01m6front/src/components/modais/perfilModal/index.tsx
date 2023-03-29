import { useContext } from "react";
import { ModalContext } from "../../../contexts/modalContext";
import { iPerfilProps } from "../../../interfaces/interfaces";
import { Backgroundmodal } from "../contacteModal/style"

function PerfilModal(props: iPerfilProps) {
  const { openOrCloseModal, changeModal } = useContext(ModalContext)

  return (
    <Backgroundmodal>
      <div className={`box01`}>
        <div className="centerBox">
          <div className="headContacteBox">
            <button className="btnCloseModal" onClick={() => openOrCloseModal('perfil', false)}>X</button>
          </div>
          <p className="contacteTitle">{props.name}</p>
          <p className="contacteTitle">{props.email}</p>
          <p className="contacteTitle">{props.phone}</p>
          <div className="btnBox">
            <button className="btnYes" onClick={() => changeModal('perfil', 'delete')}  >Deletar conta</button>
            <button className="btnNo" onClick={() => changeModal('perfil', 'editUser')}>Editar</button>
          </div>
        </div>
      </div>
    </Backgroundmodal>
  )
}

export default PerfilModal