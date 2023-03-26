/* eslint-disable react-hooks/exhaustive-deps */
import { AiFillEye } from "react-icons/ai"
import { Toaster } from 'react-hot-toast';
import { Window, ContainerLogin, Title1 } from './style';
import { useContext } from 'react';
import { UserContext } from "../../contexts/userContext";

function LoginPage() {
  const { userLogin, handleLogin, login, error, registerPage } = useContext(UserContext)

  return (
    <>      
      <Window>
        <Title1>MyContacts</Title1>
        <ContainerLogin>
          <span className='title2'>Login</span>
          <form onSubmit={handleLogin(userLogin)}>
            <div className='inputSquare'>
              <label htmlFor="email">Email</label>
              <input className='email' placeholder='Email' {...login('email')} />
              <p>{error.email?.message}</p>
            </div>
            <Toaster />

            <div className='inputSquare'>
              <label htmlFor="password">Senha</label>
              <div className='password-square'>
                <input className='password' placeholder='Senha' {...login('password')} />
                <AiFillEye className='eye' />
              </div>
              <p>{error.password?.message}</p>
            </div>

            <button type="submit" className='btn enter'>Entrar</button>
          </form>;
          <span className='account'>Ainda não é cadastrado?</span>
          <button className='btn newaccount' type='button' onClick={() => { registerPage() }}>Cadastre-se</button>
            </ContainerLogin>
        </Window>
    </>
  )
}

export default LoginPage;