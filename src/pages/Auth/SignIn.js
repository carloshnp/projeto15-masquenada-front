import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SignIn() {
  return (
    <>
      <Header />
      <SignInContainer>
        <h1>LOGIN</h1>

        <Link to="/sign-up">
          <h2>Não possui uma conta? Cadastre-se!</h2>
        </Link>

        <form>
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

          <button>ENTRAR</button>
        </form>
      </SignInContainer>
      <Footer />
    </>
  );
}

const SignInContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 165px 0px 20px 0px;
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
      width: 330px;
      height: 40px;
      margin-bottom: 20px;
    }

    button {
      width: 200px;
      height: 45px;
      background-color: #2D5C76;
      color: #F0EACC;
      font-weight: 700;
      margin: 10px auto 100px auto;
    }
  }
`