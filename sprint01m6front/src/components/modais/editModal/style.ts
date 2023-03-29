import styled from "styled-components";

const BackgroundEditmodal = styled.main`
  width: 100vw;

    .box01{
    display: flex;
    width: 100vw;
    height: 100vh;    
    justify-content: center;
    align-items: center;  
    background-color:var(--gradient1-opacity);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    .headContacteBox{
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding:5px;
      width: 90%;
      position: absolute;
      top: 15px;
    }

    .centerBox{
    width: 80%;
    height: 80%;
    min-width: 200px;
    max-width: 400px;
    min-height: 200px;
    max-height: 400px;
    background-color: var(--color-4);
    border-radius: 8px;
    box-shadow: 0 0 40px 25px gray;
    border: 4px solid white;
    position: relative;
    }

    .contacteTitle{
    top: 20px;
    left: 130px;
    color: var(--green-01);
    font-weight: 800;
    font-size: 1.3rem;
    font-style: oblique;
    }

    .btnCloseModal{
    top: 20px;
    right: 30px;
    background: transparent;
    color: red;
    font-size: 25px;
    font-weight: 800;
    cursor: pointer;
    position: absolute;
    right: 1px;
    top: 5px;
    }

    .createContacteForm{
      position: absolute;
      width: 100%;
      top: 70px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;
      justify-content: center;

      label{
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      color: white;
      width: 80%;
      gap: 5px;
      }

      input{
      height: 38px;
      width: 100%;   
      border-radius: 3px;
      padding: 0px 13px 0px 13px;
      background-color: var(--color-2);  
      border:none;
  }   
    }

    .addBtn{
      background: var(--green-04);
      color: papayawhip;
      padding: 15px;
      width: 80%;
      border-radius: 8px;
      font-size: 2rem;
      font-weight: 700;
    }

    .addBtn:hover{
      filter: brightness(190%);
    }
  }
  `

export default BackgroundEditmodal