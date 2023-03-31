import styled from "styled-components";

export const Backgroundmodal = styled.main`
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

      .modalTitle{
        font-size: 1.5rem;
        color: rgb(205, 205, 205);
      }
    }

    .centerBox{
    width: 80%;
    height: 90%;
    min-width: 200px;
    max-width: 400px;
    min-height: 200px;
    max-height: 450px;
    background-color: var(--color-4);
    border-radius: 8px;
    box-shadow: 0 0 40px 25px gray;
    border: 4px solid white;
    position: relative;

    .btnBox{      
      display: flex;
      justify-content: space-around;
      width: 90%;
      margin: 0 auto;
      margin-top: 10px;
      position: absolute;
      bottom: 30px;
      left: 25px;

      .btn{
        padding: 9px;
        border-radius: 6px;
        font-size: 2rem;
        font-weight: 700;
        color: rgb(205, 205, 205);
      }

      .btn:hover{
        filter: brightness(130%);
      }

      .del{
        background-color: var(--color-negative);
      }
      .edit{
        background-color: var(--green-03);
      }
    }

    .contacteTitle01{
      position: absolute;
      top: 90px;
      left: 25px;
      font-size: 1.5rem;
      color: whitesmoke;
      width: 85%;
      margin: 0 auto;
      text-align: center;
    }

    .contacteTitle02{
      position: absolute;
      bottom: 120px;
      left: 25px;
      font-size: 1.5rem;
      color: whitesmoke;
      width: 85%;
      margin: 0 auto;
      text-align: center;
    }

  }
  .centerModal{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 80%;
    color: whitesmoke;
    gap: 10px;
    margin: 0 auto;
  }

  .centerDeleteModal{
    position: absolute;
    top: 100px;
    left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 50%;
    color: whitesmoke;
    gap: 10px;
  }

    .centerInformations{
    top: 20px;
    left: 130px;
    color: var(--green-01);
    padding: 3px;
    box-shadow: inset 0 0 15px 2px gray;
    border-radius: 8px;
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