import { CardContainer } from "./style"

interface iCardProps{
  name: string;
  email: string;
  phone: string;
  click?: () => void;
}

function Card({ name, email, phone, click }: iCardProps) {
  return (
    <CardContainer onClick={click} >
      <div className="cardImg"><img src="https://cdn-icons-png.flaticon.com/512/17/17340.png" alt="" /></div>
      <div className="square name">
        <span>
          Nome:
        </span>
        <p>
          {name}
        </p>
      </div>

      <div
        className="square email">
        <span>
         Email:
      </span>
        <p>
          {email}
        </p>
      </div>

      <div className="square phone">
        <span>
          Telefone:
      </span>
        <p>
          {phone}
        </p>
      </div>
    </CardContainer>
  )
}

export default Card