import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { postSignUp } from "../../service/masQueNadaService";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);

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

    if (password.length < 8) {
      setPassword("");
      setConfirmPassword("");
      alert("Sua senha precisa ter no mínimo 8 dígitos.");
    }

    postSignUp(body)
      .then(() => {
        resetForm();
        navigate("/sign-in");
        setLoading(false);
      })
      .catch((err) => {
        resetForm();
        alert("Esse e-mail já existe. Tente outro.");
        console.log(err);
        setLoading(false);
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
            disabled={loading}
          />

          <span>E-mail</span>
          <input
            placeholder="Insira seu e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
          />

          <span>Senha</span>
          <input
            placeholder="Insira uma senha de 8 dígitos"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />

          <span>Confirme sua senha</span>
          <input
            placeholder="Digite sua senha novamente..."
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={loading}
          />

          <button disabled={loading}>
            {loading ? (
              <ThreeDots
                color="#96c0a7"
                height={40}
                width={40}
              />
            ) : ("Cadastrar")}
          </button>
        </form>
      </SignUpContainer>
      <Footer />
    </>
  );
}

const SignUpContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 175px;

  h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 26px;
  }

  h2 {
    font-size: 15px;
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
      margin: 10px auto 40px auto;
    }
  }
`