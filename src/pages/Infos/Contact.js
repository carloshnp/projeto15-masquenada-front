import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <ContactContainer>
        <h1>CONTATO</h1>

        <div>
          <ion-icon name="call-outline"></ion-icon>
          <span><strong>SAC:</strong> 21 0000-0000</span>
        </div>
        <div>
          <ion-icon name="mail-outline"></ion-icon>
          <span><strong>E-mail:</strong> masquenada@email.com</span>
        </div>
        <div>
          <ion-icon name="logo-whatsapp"></ion-icon>
          <span><strong>WhatsApp: </strong> 21 90000-0000</span>
        </div>

        <h2>Acompanhe nossas redes sociais:</h2>
        <div className="socialmedia">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
      </ContactContainer>
      <Footer />
    </>
  )
}

const ContactContainer = styled.div`
  width: 100vw;
  max-width: 600px;
  margin: 0 auto;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 190px;
  font-size: 16px;

  h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 26px;
    color: #2D5C76;
  }

  h2 {
    font-size: 18px;
    margin: 30px 0px 10px 0px;
    font-weight: 700;
  }

  div {
    width: 100%;
    max-width: 400px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #333333;

    ion-icon {
    margin-right: 8px;
    font-size: 22px;
    }
  }

  .socialmedia {
    justify-content: center;
    border-bottom: 0px;
    color: #2D5C76;

    ion-icon {
      margin-right: 20px;
      font-size: 35px;
    }
  }
`