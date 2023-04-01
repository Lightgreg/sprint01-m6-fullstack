import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { iContacte, iPerfilProps, iUser } from "../../../interfaces/interfaces";
import { Backgroundmodal } from "../style";

function DeleteModal(props: iPerfilProps) {

  const { openOrCloseModal, deleteItem, deleteUser, seeItensModal } = useContext(UserContext)

  function deleteAndCloseModal() {    
    if (seeItensModal?.user == false) {
      deleteItem(props?.id)      
    } else {
      deleteUser()
    }
    openOrCloseModal('delete',false)
  }

  return (
    <Backgroundmodal>
      <div className={`box01`}>
        <div className="centerBox">
          <div className="headContacteBox">
            <button className="btnCloseModal" onClick={() => openOrCloseModal('delete', false)}>X</button>
          </div>
          <p className="contacteTitle01">Tem certeza que dejesa deletar este item?</p>
          <div className="centerDeleteModal">
            <p className="centerInformations">{props?.name}</p>
            <p className="centerInformations">{props?.email}</p>
            <p className="centerInformations">{props?.phone}</p>
          </div>
          <p className="contacteTitle02">esta ação não pode ser desfeita!</p>
          <div className="btnBox">
            <button className="btn del" onClick={() => deleteAndCloseModal() }>Certeza</button>
            <button className="btn edit" onClick={() => openOrCloseModal('delete',false)}>Desistir</button>
          </div>
        </div>
      </div>
    </Backgroundmodal>
  )
}

export default DeleteModal