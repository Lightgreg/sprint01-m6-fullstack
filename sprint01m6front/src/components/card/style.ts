import styled from "styled-components";

export const CardContainer = styled.main`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 5rem;
  max-height: 90px;
  background: var(--color-0); 
  border-radius: 7px;
  padding: 10px;
  margin:0 auto;
  cursor: pointer;
  margin-bottom: 5px;
  position: relative;
  border: solid 2px var(--color-4);
  box-shadow: inset 0 0 20px 10px gray;

  :hover{
    filter: brightness(125%);
    z-index: 1;
    zoom: 125%
  }

  .cardImg{
    width: 70px;
    position: absolute;
    left: 50px;
  }

  .square{
    position: absolute;
    top: 25px;
    height: 95%;
    
  }
  .square.name{
    position: absolute;
    left: 130px;
    
  }
  .square.email{
    position: absolute;
    left: 300px;
  }
  .square.phone{
    position: absolute;
    right: 60px;
  }

  p{
    white-space: nowrap; 
    max-width: 13ch;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  `