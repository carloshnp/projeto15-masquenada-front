import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { postSignIn } from "../../service/masQueNadaService";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function sendForm(e) {
    e.preventDefault();
    setLoading(true);

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
        setLoading(false);
      })
      .catch((err) => {
        resetForm();
        alert("Dados incorretos. Tente novamente.");
        console.log(err);
        setLoading(false);
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
            disabled={loading}
          />

          <span>Senha</span>
          <input
            placeholder="Insira sua senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            ) : ("Entrar")}
          </button>
        </form>
      </SignInContainer>
      <Footer />
    </>
  );
}

const SignInContainer = styled.div`
  width: 100%;
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
      margin: 10px auto 0px auto;
    }
  }
`