import { Toaster } from 'react-hot-toast';
import { Window } from "./style";
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { Title1 } from '../login/style';

function RegisterPage() {
  const { returnLogin, userRegister, handleSubmit, errors, register } = useContext(UserContext);
  return (
    <Window>
      <Toaster/>
      <div className="registerAll">
        <div className="registerHead">
          <Title1>MyContacts</Title1>
          <button onClick={() => { returnLogin() }} className="btn return">Voltar</button>
        </div>
        <div className="registerSlogan">
          <h2>Crie sua conta</h2>
          <h3>Esta a um passo de possuir sua lista de contatos!!!</h3>
        </div>
        <form onSubmit={handleSubmit(userRegister)}>
          <div className="inputSquare">
            <label htmlFor="name">Nome</label>
            <input placeholder="Digite aqui seu nome" {...register('name')} />
            <p>{errors.name?.message}</p>
          </div>
          <div className="inputSquare">
            <label htmlFor="email">Email</label>
            <input placeholder="Digite aqui seu E-mail" {...register('email')} />
            <p>{errors.email?.message}</p>
          </div>
          <div className="inputSquare">
            <label htmlFor="phone">Telefone</label>
            <input placeholder="Digite aqui seu Telefone" {...register('phone')} />      <p>{errors.phone?.message}</p>        
          </div>
          <div className="inputSquare">
          <label htmlFor="password">Senha</label>
            <input placeholder="Senha" type='password' {...register('password')} />
            <p>{errors.password?.message}</p>
          </div>

          <div className="inputSquare">
            <label>Confirmar Senha</label>
            <input placeholder="Confirmar Senha" type='password'/>           
          </div>

          <button className="btn register" type="submit">Cadastrar</button>
        </form>
      </div>
    </Window>
  )
}

export default RegisterPage;