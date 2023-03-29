import { useContext } from "react";
import { ModalContext } from "../../../contexts/modalContext";
import { UserContext } from "../../../contexts/userContext";
import { iContacte, iPerfilProps, iUser } from "../../../interfaces/interfaces";
import { Backgroundmodal } from "../contacteModal/style"

function DeleteModal(props: iPerfilProps) {

  const { openOrCloseModal } = useContext(ModalContext)

  return (
    <Backgroundmodal>
      <div className={`box01`}>
        <div className="centerBox">
          <div className="headContacteBox">
            <button className="btnCloseModal" onClick={() => openOrCloseModal('delete', false)}>X</button>
          </div>
          <p className="contacteTitle">Tem certeza que dejesa deletar? este item.</p>
          <p className="contacteTitle">{props?.name}</p>
          <p className="contacteTitle">{props?.email}</p>
          <p className="contacteTitle">{props?.phone}</p>
          <p className="contacteTitle">esta ação não pode ser desfeita!</p>
          <div className="btnBox">
            <button className="btnYes">Certeza</button>
            <button className="btnNo" onClick={() => openOrCloseModal('delete',false)}>Desistir</button>
          </div>
        </div>
      </div>
    </Backgroundmodal>
  )
}

export default DeleteModal