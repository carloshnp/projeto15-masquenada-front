import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { postSignIn } from "../../service/masQueNadaService";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();

    const body = {
      email,
      password
    }

    postSignIn(body)
      .then((res) => {
        resetForm();
        localStorage.setItem("user", JSON.stringify(res.data.name));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/");
      })
      .catch((err) => {
        resetForm();
        alert("Algo deu errado. Tente novamente.");
        console.log(err);
      })
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Header />
      <SignInContainer>
        <h1>LOGIN</h1>

        <Link to="/sign-up">
          <h2>Não possui uma conta? Cadastre-se!</h2>
        </Link>

        <form onSubmit={sendForm}>
          <span>E-mail</span>
          <input
            placeholder="Insira seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <span>Senha</span>
          <input
            placeholder="Insira sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;

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
      margin: 10px auto 0px auto;
    }
  }
`