import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/imgs/logo.png";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="Mas Que Nada!" />
      </Link>

      <Menu>
        <span>Categorias</span>
        <span>Sobre</span>
        <span>Cupons</span>
      </Menu>

      <Icons>
        <Link to="/sign-in">
          <ion-icon name="person-circle-outline"></ion-icon>
        </Link>
        <ion-icon name="cart-sharp"></ion-icon>
        <ion-icon name="log-out-sharp"></ion-icon>
      </Icons>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100vw;
  height: 130px;
  background-color: #96C0A7;
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
`

const Menu = styled.div`
  width: 100vw;
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  span {
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    color: #333333;
    text-transform: uppercase;
  }
`

const Icons = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 55px;
  right: 40px;

  ion-icon {
    cursor: pointer;
    font-size: 30px;
  }
`