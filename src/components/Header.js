import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/imgs/logo.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Mas Que Nada!" />
      </Link>

      <Menu>
        <div className="categories">
          <span>CATEGORIAS</span>

          <div className="menu-categories">
            <p>Todos</p>
            <p>Roupas</p>
            <p>Chuteiras</p>
            <p>Acessórios</p>
            <p>Masculino</p>
            <p>Feminino</p>
          </div>
        </div>
        <Link to="/about-us">
          <span>SOBRE</span>
        </Link>
        <Link to="/contact">
          <span>CONTATO</span>
        </Link>
      </Menu>

      <Icons>
        <Link to="/sign-in">
          <ion-icon name="person-circle-outline"></ion-icon>
        </Link>
        <ion-icon name="cart-sharp"></ion-icon>
        <ion-icon name="log-out-sharp" onClick={() => {
          localStorage.clear();
          navigate("/");
        }}></ion-icon>
      </Icons>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 130px;
  background-color: #96c0a7;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  box-shadow: 2px 2px 2px rgb(0 0 0 / 15%);

  img {
    padding-top: 20px;
    margin-bottom: 30px;
  }
`;

const Menu = styled.div`
  width: 100vw;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  .categories {
    position: relative;
    &:hover {
      .menu-categories {
        display: flex;
      }
    }

    .menu-categories {
      width: 170px;
      height: 190px;
      background-color: #96c0a7;
      color: #f0eacc;
      font-weight: 700;
      line-height: 1.8;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0px 10px;

      position: absolute;
      top: 20px;
      left: -40px;

      p {
        width: 130px;
        padding: 0 20px;
        cursor: pointer;
        transition: all 0.4s;
        text-transform: uppercase;
        &:hover {
          color: #2d5c76;
        }
      }
    }
  }

  span {
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    color: #333333;
    padding-bottom: 10px;
  }
`;

const Icons = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 55px;
  right: 40px;

  ion-icon {
    font-size: 30px;
  }
`;
