import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { postSignUp } from "../../service/masQueNadaService";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();

    const body = {
      name,
      email,
      password,
      confirmPassword
    }

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      alert("Senhas não conferem. Digite novamente.");
    }

    postSignUp(body)
      .then(() => {
        resetForm();
        navigate("/sign-in");
      })
      .catch((err) => {
        resetForm();
        alert("Algo deu errado. Tente novamente.");
        console.log(err);
      });
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <>
      <Header />
      <SignUpContainer>
        <h1>CRIE SUA CONTA</h1>

        <Link to="/sign-in">
          <h2>Já possui uma conta? Faça seu login!</h2>
        </Link>

        <form onSubmit={sendForm}>
          <span>Nome</span>
          <input
            placeholder="Insira seu nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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
            placeholder="Insira uma senha de 8 dígitos"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span>Confirme sua senha</span>
          <input
            placeholder="Digite sua senha novamente..."
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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