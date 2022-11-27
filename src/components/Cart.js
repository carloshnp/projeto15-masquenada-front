import styled from "styled-components";

export default function Cart() {
  return (
    <CartContainer>
      <h1>SEU CARRINHO</h1>

      <SelectedProducts>
        <CartProduct>
          <img src="https://cdn.shopify.com/s/files/1/0571/2822/2763/products/1661fdd5-16b1-4579-bbf2-f567461f6112_600x.jpg" alt="Product" />

          <div className="info-product">
            <p className="name-product">CAMISA SELEÇÃO BRASILEIRA 2022</p>
            <p><strong>COR: </strong>Amarela</p>
            <p><strong>TAMANHO: </strong>P</p>
            <p>R$ 199,50</p>

            <div className="quantity">
              <ion-icon name="remove-circle-outline"></ion-icon>
              <span className="quantity-number">0</span>
              <ion-icon name="add-circle-outline"></ion-icon>
            </div>
          </div>

          <div className="delete-product">
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </CartProduct>
      </SelectedProducts>

      <div className="bottom-card">
        <div className="total">
          <span>SUBTOTAL</span>
          <span><strong>R$ 199,50</strong></span>
        </div>
        <button>Finalizar compra</button>
      </div>
    </CartContainer>
  )
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

  h1 {
    font-weight: 700;
    margin-bottom: 30px;
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
`

const SelectedProducts = styled.div`
  width: 440px;
  height: 70vh;
  margin-bottom: 20px;
  overflow-y: scroll;
`

const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #333333;
  margin-bottom: 30px;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }

  .info-product {
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    p {
    margin-bottom: 15px;
    }

    .name-product {
      font-weight: 700;
      line-height: 1.3;
      color: #2D5C76;
    }

    .quantity {
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70px;
    height: 20px;
    }
  }

  .delete-product {
    font-size: 22px;
  }
`