import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { iPerfilProps } from "../../../interfaces/interfaces";
import { Backgroundmodal } from "../style";

function PerfilModal(props: iPerfilProps) {
  const { openOrCloseModal, changeModal } = useContext(UserContext)

  return (
    <Backgroundmodal>
      <div className={`box01`}>
        <div className="centerBox">
          <div className="headContacteBox">
            <button className="btnCloseModal" onClick={() => openOrCloseModal('perfil', false)}>X</button>
          </div>
          <div className="centerModal">
            <span>Nome:</span>
            <p className="centerInformations">{props.name}</p>
            <span>Email:</span>
            <p className="centerInformations">{props.email}</p>
            <span>Telefone:</span>
            <p className="centerInformations">{props.phone}</p>
          </div>
          <div className="btnBox">
            <button className="btn del" onClick={() => changeModal('perfil', 'delete')}  >Excluir</button>
            <button className="btn edit" onClick={() => changeModal('perfil', 'editContacte')}>Editar</button>
          </div>
        </div>
      </div>
    </Backgroundmodal>
  )
}

export default PerfilModal