import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CartProduct from "../components/CartProduct";
import UserContext from "../context/UserContext";

export default function Cart({ showCart, setShowCart }) {
  const { cartProducts } = useContext(UserContext);

  const userExists = JSON.parse(localStorage.getItem('token'));

  const navigate = useNavigate();

  function finalizePurchase() {
    if (cartProducts.length === 0) {
      return alert("Seu carrinho está vazio!");
    }
    if (userExists !== null) {
      navigate("/checkout");
      setShowCart(false);
    } else {
      alert("Faça login para concluir sua compra!");
      navigate("/sign-in");
      setShowCart(false);
    }
  }

  return (
    <CartContainer showCart={showCart}>
      <h1>CARRINHO</h1>

      <SelectedProducts>
        {cartProducts.length === 0 ? 
        (<h2>Seu carrinho está vazio.</h2>)
        :
        (cartProducts.map((value, index) => 
          <CartProduct key={index} />
        ))}
      </SelectedProducts>

      <div className="bottom-card">
        <div className="total">
          <span>SUBTOTAL</span>
          <span><strong>R$ 0</strong></span>
        </div>
        <button onClick={finalizePurchase}>Finalizar compra</button>
      </div>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 500px;
  height: 100vh;
  padding: 30px;
  background-color: #F0EACC;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  font-size: 16px;
  color: #333333;
  transform: ${(props) => (props.showCart ? "translateX(0)" : "translateX(500px)")};  
  transition: all 0.5s ease-out;

  h1 {
    font-weight: 700;
    margin-bottom: 35px;
    font-size: 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #2D5C76;
  }

  .bottom-card {
    width: 440px;

    .total {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    button {
      width: 440px;
    }
  }
`;

const SelectedProducts = styled.div`
  width: 440px;
  height: 70vh;
  margin-bottom: 20px;
  overflow-y: scroll;
`;