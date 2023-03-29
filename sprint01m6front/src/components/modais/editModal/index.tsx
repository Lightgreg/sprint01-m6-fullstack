import { useContext } from "react";
import { ModalContext } from "../../../contexts/modalContext";
import BackgroundEditmodal from "./style";

function EditModal() {
  const { openOrCloseModal } = useContext(ModalContext)

  return (
    <BackgroundEditmodal>
      <div className={`box01`}>
        <div className="centerBox">
          <div className="headContacteBox">
            <p className="contacteTitle">Editar usuario</p>
            <button className="btnCloseModal" onClick={() => openOrCloseModal('perfil',false)}>X</button>
          </div>

          <form
            className="createContacteForm"
          // onSubmit={handleSubmit(createPost)}
          >
            <label htmlFor="addContacteNameInput">
              Nome:
              <input
                className="inputDefault"
                id="addContacteNameInput"
                type="text"
                placeholder="Nome do Contato"
              // {...register("name")}
              />
            </label>
            <label htmlFor="addContacteEmailInput">
              Email:
              <input
                className="inputDefault"
                id="addContacteEmailInput"
                type="text"
                placeholder="Email do Contato"
              // {...register("email")}
              />
            </label>
            <label htmlFor="addContactePhoneInput">
              Telefone:
              <input
                className="inputDefault"
                id="addContactePhoneInput"
                type="text"
                placeholder="Telefone do Contato"
              // {...register("phone")}
              />
            </label>

            <button type="submit" className="addBtn">
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </BackgroundEditmodal>
  )
}

export default EditModal