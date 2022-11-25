import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Checkout() {
  return (
    <>
      <Header />
      <CheckoutContainer>
        <h1>FINALIZAR COMPRA</h1>
        <h2>Preencha os campos para finalizar seu pedido!</h2>

        <form>
          <input
            placeholder="Nome completo"
            type="text"
            required
          />
          <input
            placeholder="CPF"
            type="text"
            required
          />
          <input
            placeholder="Celular"
            type="tel"
            required
          />
          <input
            placeholder="CEP"
            type="text"
            required
          />
          <input
            placeholder="Endereço"
            type="text"
            required
          />
          <input
            placeholder="Complemento"
            type="text"
            required
          />

          <div className="payment">
            <span className="total"><strong>TOTAL A PAGAR: </strong></span>
            <span>Selecione uma forma de pagamento:</span>

            <div>
              <input type="radio" name="payment" value="credit-card" />
              <p>Cartão de crédito</p>
            </div>
            <div>
              <input type="radio" name="payment" value="pix" />
              <p>Pix</p>
            </div>
            <div>
              <input type="radio" name="payment" value="ticket" />
              <p>Boleto</p>
            </div>
          </div>

          <Link to="/sucess">
            <button>CONCLUIR COMPRA</button>
          </Link>
        </form>
      </CheckoutContainer>
      <Footer />
    </>
  )
}

const CheckoutContainer = styled.div`
  width: 100vw;
  height: 510px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
  text-align: center;

  h1 {
    margin-bottom: 15px;
    font-weight: 700;
    font-size: 26px;
  }

  h2 {
    font-size: 14px;
    margin-bottom: 30px;
  }

  form {
    max-width: 580px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    input {
      width: 100vw;
      max-width: 260px;
      height: 45px;
      margin: 0px 10px 0px 10px;
    }

    button {
      width: 200px;
      margin: 10px auto 40px auto;
    }

    .payment {
      width: 100vw;
      max-width: 540px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 25px;

      input {
        width: 15px;
      }

      span {
        margin-bottom: 15px;
      }
      
      div {
        display: flex;
        align-items: center;
        height: 30px;
      }

      ion-icon {
        font-size: 20px;
      }
    }
  }
`