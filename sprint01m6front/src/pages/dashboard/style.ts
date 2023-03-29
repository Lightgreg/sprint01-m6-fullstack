import styled from "styled-components";

 export const DashContainer = styled.main`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90%;
  background: transparent;
  border: solid 6px var(--color-0);
  border-radius: 7px;
  padding: 8px;
  box-shadow: inset 0 0 80px 10px gray;

  .leftSquare{
    display: flex;
    width: 20%;
    height: 100%;
    background-color: var(--color-1);
    border-radius: 7px 0 0 7px;
    align-items: center;
    flex-direction: column;
    padding-top: 5px;
    h2{
      font-size: 2.5rem;
    }
  }
  .userName{
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 auto;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: var(--color-4);
    padding: 5px;
    border-radius: 8px;
    box-shadow: inset 0 0 30px 1px gray;
  }

  .rightSquare{
    width: 80%;
    height: 100%;
    border-radius: 0 7px 7px 0;
    overflow: auto;  
  }

  .imgSquare{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9rem;
    height: 9rem;
    border-radius: 100px 100px;
    border: 2px solid var(--green-01);
    overflow: hidden;
    box-shadow: inset 0 0 20px 20px gray;
    margin-top: 15px;
    margin-bottom: 15px;

  }

  .leftSquareBtn{
    width: 80%;
    padding: 5px;
    border-radius: 8px;
    text-align: center;
    background: transparent;
    color: white;
    cursor: pointer;
    font-size: 2.5rem;
    font-family: 'Anton', sans-serif;
    
  }

  .leftSquareBtn.small{
    font-size: 27px;
    padding: 10px 20px;
    font-weight: 700;
  }

  .leftSquareBtn.exit:hover{
    background:var(--color-negative);
  }

  .leftSquareBtn.perfil:hover{
    background:orange;
    filter: brightness(90%);
  }

  button:hover{
    background: var(--color-primary);
    filter: brightness(130%);
  }

  h1{
    width: 80%;
    font-size: 4rem;
    font-weight: 700;
    color: white;
    margin: 0 auto;
    padding: 10px;
  }

  `

