import { useContext } from "react";
import { ModalContext } from "../../../contexts/modalContext";
import { Backgroundmodal } from "./style";

function ContacteModal() {
  const { openOrCloseModal } = useContext(ModalContext)

  return (
    <Backgroundmodal>
      <div className={`box01`}>
        <div className="centerBox">
          <div className="headContacteBox">
            <p className="contacteTitle">Crie seu contato</p>
            <button className="btnCloseModal" onClick={() => openOrCloseModal('contacte',false)}>X</button>
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
              Adicionar Contato
            </button>
          </form>
        </div>
      </div>
    </Backgroundmodal>
  )
}

export default ContacteModal