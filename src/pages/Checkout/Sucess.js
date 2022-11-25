import { Link } from "react-router-dom"
import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function Sucess() {
  return (
    <>
      <Header />
      <SucessContainer>
        <h1>Compra finalizada com sucesso!</h1>
        <Link to="/">
          <button>
            VOLTAR PARA HOME
          </button>
        </Link>
      </SucessContainer>
      <Footer />
    </>
  )
}

const SucessContainer = styled.div`
  width: 100vw;
  height: 350px;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 700;

  h1 {
    margin-bottom: 40px;
    font-size: 24px;
    color: #2D5C76;
  }

  button {
    width: 200px;
    background-color: #96C0A7;
    border-radius: 5px;
    box-shadow: 2px 2px 2px rgb(0 0 0 / 15%);
  }
`