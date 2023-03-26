import styled from "styled-components";

export const Window = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  background:linear-gradient(var(--gradient1),var(--gradient2));
  width: 100vw;
  height: 100vh;
  transition: 1s ease;
  `

export const ContainerLogin = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  padding: 15px; 
  width: 25%;
  min-width: 250px;
  max-width: 399px;
  border-radius: 3px;
  background-color: var(--grey-3);
  margin-top: 20px;


  .title2{
    font-family: var(--font-f);
    font-size: 16px;
    font-weight: 800; 
    color: var(--grey-0);
  }

  .btn{
    height: 38px;
    width: 95%;
    border-radius: 4px;
    padding: 0px 22px 0px 22px;
    cursor: pointer;
  }

  p{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 11px;
  }

  .btn.enter{
    background-color: var(--color-primary);
    width: 100%;
    color: #fff;
  }
  .btn.enter:hover{
    filter: brightness(110%);
  }

  .btn.newaccount{
    background-color: var(--grey-1);
    max-width: 500px;
    color: var(--grey-0);
  }
  .btn.newaccount:hover{
    filter: brightness(110%);
  }

  .account{
    font-family: var(--font-f);
    font-size: 10px;
    color: var(--grey-1);
    margin-bottom: 10px;
  }

  label{
    font-family: var(--font-f);
    color: var(--grey-0);
    font-size: 10px;
  }

  .inputSquare{
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 5px;
    width: 100%;
  }

  input{
    height: 38px;
    width: 100%;   
    border-radius: 3px;
    padding: 0px 13px 0px 13px;
    background-color: var(--grey-2);  
    border:none;
  }   

  .password-square{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    background-color: var(--grey-2);
    border-radius: 3px;
    padding-right: 5px;
  }

  input.password{
    width:85%;   
    background-color: var(--grey-2);
    border-radius: 3px;   
  }

  form{
    width: 100%;
    padding: 10px;
    max-width: 500px;

    p{
      color: var(--grey-0);
      margin-bottom: 2px;
    }

    .eye{
      cursor: pointer;
    }
  }
`
export const Title1 = styled.h2`
  font-weight: 800;
  text-align: center;
  color: var(--color-primary);
  text-shadow: 3px 3px var(--color-primary-negative);
  padding: 5px;
  font-family: var(--font-f); 
  font-size: 3rem;
  font-weight: 800;
`

