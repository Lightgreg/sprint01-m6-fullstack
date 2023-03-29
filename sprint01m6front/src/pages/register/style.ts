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

.btn{
  padding: 5px;
  color: var(--color-0);
  font-family: var(--font-f);
  font-weight: 600;
  cursor: pointer;
}

.registerAll{
width: 95vw;
max-width: 370px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
background-color: var(--color-3);
position: absolute;
top: 55px;
}

.registerHead{
  display: flex;
  align-items: center;
  width: 100%;  
  justify-content: space-between;
  margin-bottom: 15px;
  position: relative;
  top: -45px;
}

.registerSlogan{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-bottom: 15px;

  h2{
  font-family: 'Inter';
  font-size: 15px;
  font-weight: 700;
  color:var(--color-0); 
  }

  h3{
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 400;
  color: var(--color-1);

  }
}

form{
  width: 95%;
}

.registerTitle{
  font-size: 18px;
  font-weight: 800;
  color: var(--color-primary);
  font-family: var(--font-f); 
}

.btn.return{
  background: var(--color-3);
border-radius: 4px;

&:hover{
  background: var(--color-2);
}
}

.inputSquare{
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  margin-bottom: 10px;
  
  label{
    color: var(--color-0);
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }

  input{
    background-color: var(--color-2);
    border: 2px solid var(--color-2);
    border-radius: 3px;
    padding: 6px;
  }

  select{
     background-color: var(--color-2);
    border: 2px solid var(--color-2);
    border-radius: 3px;
    padding: 6px;
    color: var(--color-1);
  }

}
.btn.register{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 7px 22px;
  gap: 10px;
  border-radius: 4px;
  margin: 0 auto;
  width: 100%;
  background-color: var(--color-primary-negative);
  &:hover{
    background-color: var(--color-primary);
  }

}

p{
  color: var(--color-0);
}

`