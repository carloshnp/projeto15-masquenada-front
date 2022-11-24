import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SignUp() {
  return (
    <>
      <Header />
      <SignUpContainer>
        <h1>CRIE SUA CONTA</h1>

        <Link to="/sign-in">
          <h2>Já possui uma conta? Faça seu login!</h2>
        </Link>

        <form>
          <span>Nome</span>
          <input
            placeholder="Insira seu nome"
            type="text"
            required
          />

          <span>Sobrenome</span>
          <input
            placeholder="Insira seu sobrenome"
            type="text"
            required
          />

          <span>E-mail</span>
          <input
            placeholder="Insira seu e-mail"
            type="email"
            required
          />

          <span>Senha</span>
          <input
            placeholder="Insira sua senha"
            type="password"
            required
          />

          <button>CADASTRAR</button>
        </form>
      </SignUpContainer>
      <Footer />
    </>
  );
}

const SignUpContainer = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 165px;

  h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 26px;
  }

  h2 {
    font-size: 14px;
    text-decoration: underline;
    margin-bottom: 30px;
    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 100vw;
      max-width: 330px;
      height: 40px;
      margin-bottom: 20px;
    }

    button {
      width: 200px;
      height: 45px;
      background-color: #2D5C76;
      color: #F0EACC;
      font-weight: 700;
      margin: 10px auto 40px auto;
    }
  }
`