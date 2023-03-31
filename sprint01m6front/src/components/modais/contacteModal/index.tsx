import { useContext } from "react";
import { SubmitHandler } from "react-hook-form";
import { UserContext } from "../../../contexts/userContext";
import { iContacte } from "../../../interfaces/interfaces";
import { Backgroundmodal } from "../style";

function ContacteModal() {
  const { openOrCloseModal, submitContacte, registerContacte, contacteError, createContacte } = useContext(UserContext)

  return (
    <Backgroundmodal>
      <div className={`box01`}>
        <div className="centerBox">
          <div className="headContacteBox">
            <p className="modalTitle">Crie seu contato</p>
            <button className="btnCloseModal" onClick={() => openOrCloseModal('contacte', false)}>X</button>
          </div>

          <form
            className="createContacteForm"
            onSubmit={submitContacte(createContacte)}
          >
            <label htmlFor="addContacteNameInput">
              Nome:
              <input
                className="inputDefault"
                id="addContacteNameInput"
                type="text"
                placeholder="Nome do Contato"
                {...registerContacte("name")}
              />
              <p>{contacteError.name?.message}</p>
            </label>

            <label htmlFor="addContacteEmailInput">
              Email:
              <input
                className="inputDefault"
                id="addContacteEmailInput"
                type="text"
                placeholder="Email do Contato"
                {...registerContacte("email")}                
              />
              <p>{contacteError.email?.message}</p>
            </label>

            <label htmlFor="addContactePhoneInput">
              Telefone:
              <input
                className="inputDefault"
                id="addContactePhoneInput"
                type="text"
                placeholder="Telefone do Contato"
                {...registerContacte("phone")}
              />
              <p>{contacteError.phone?.message}</p>
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