import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { Backgroundmodal } from "../style";

function EditModal({submit} :any) {
  const { openOrCloseModal, registerEditContacte, seeItensModal } = useContext(UserContext)
  
  return (
    <Backgroundmodal>
      <div className={`box01`}>
        <div className="centerBox">
          <div className="headContacteBox">
            <p className="modalTitle">Editar Contato</p>
            <button className="btnCloseModal" onClick={() => openOrCloseModal('editContacte',false)}>X</button>
          </div>

          <form
            className="createContacteForm"
            onSubmit={submit}
          >
            <label htmlFor="addContacteNameInput">
              Nome:
              <input
                className="inputDefault"
                id="addContacteNameInput"
                type="text"
                placeholder="Nome do Contato"
                defaultValue={''}
                {...registerEditContacte("name")}
              />
            </label>
            <label htmlFor="addContacteEmailInput">
              Email:
              <input
                className="inputDefault"
                id="addContacteEmailInput"
                type="text"
                placeholder="Email do Contato"
                defaultValue={''}
                {...registerEditContacte("email")}
              />
            </label>
            <label htmlFor="addContactePhoneInput">
              Telefone:
              <input
                className="inputDefault"
                id="addContactePhoneInput"
                type="text"
                placeholder="Telefone do Contato"
                defaultValue={''}
                {...registerEditContacte("phone")}
              />
            </label>

            <button type="submit" className="addBtn">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </Backgroundmodal>
  )
}

export default EditModal