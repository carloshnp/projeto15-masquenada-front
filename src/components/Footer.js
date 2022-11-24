import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer>
      <h1>MAS QUE NADA! 2022 ©</h1>
      <h2>ENTRE EM CONTATO</h2>
      <h3>SOBRE</h3>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100vw;
  height: 120px;
  background-color: #2D5C76;
  font-size: 15px;
  font-weight: 700;
  color: #F0EACC;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;

  h2, h3 {
    cursor: pointer;
  }
`