import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { Backgroundmodal } from "../style";

function EditUserModal({ submit }: any) {
  const { openOrCloseModal, registerEditUser } = useContext(UserContext)

  return (
    <Backgroundmodal>
      <div className={`box01`}>
        <div className="centerEditUserBox">
          <div className="headContacteBox">
            <p className="modalTitle">Editar Contato</p>
            <button className="btnCloseModal" onClick={() => openOrCloseModal('user', false)}>X</button>
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
                placeholder="Nome do Usuario"
                defaultValue={''}
                {...registerEditUser("name")}
              />
            </label>
            <label htmlFor="addContacteEmailInput">
              Email:
              <input
                className="inputDefault"
                id="addContacteEmailInput"
                type="text"
                placeholder="Email do Usuario"
                defaultValue={''}
                {...registerEditUser("email")}
              />
            </label>
            <label htmlFor="addContactePhoneInput">
              Telefone:
              <input
                className="inputDefault"
                id="addContactePhoneInput"
                type="text"
                placeholder="Telefone do Usuario"
                defaultValue={''}
                {...registerEditUser("phone")}
              />
            </label>         
            <label htmlFor="addContactePhoneInput">
              Senha:
              <input
                className="inputDefault"
                id="addContactePhoneInput"
                type="text"
                placeholder="Senha do Usuario"
                defaultValue={''}
                {...registerEditUser("password")}
              />
            </label>         
            <label htmlFor="addContactePhoneInput">
              Confirmar Senha:
              <input
                className="inputDefault"
                id="addContactePhoneInput"
                type="text"
                placeholder="Confirmar Senha do Usuario"
                defaultValue={''}                
              />
            </label>         
            <button type="submit" className="addEditUserBtn">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </Backgroundmodal>
  )
}

export default EditUserModal