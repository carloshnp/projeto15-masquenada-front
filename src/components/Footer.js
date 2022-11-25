import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <h1>MAS QUE NADA! 2022 ©</h1>
      <h2>ENTRE EM CONTATO</h2>
      <div>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-whatsapp"></ion-icon>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100vw;
  height: 140px;
  background-color: #2D5C76;
  font-size: 15px;
  font-weight: 700;
  color: #F0EACC;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1, h2, div {
    width: 180px;
    display: flex;
    justify-content: center;
  }

  h2 {
    cursor: pointer;
  }
  
  div {
    justify-content: space-evenly;

    ion-icon {
    font-size: 25px;
    }
  }
`