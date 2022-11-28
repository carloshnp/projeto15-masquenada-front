import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReturnProductOptions from "../../components/product_options/ReturnProductOptions";

export default function ProductPage() {
  const { state } = useLocation();
  const { image, name, price, type } = state;
  const { productName } = useParams();
  const [options, setOptions] = useState([]);

  return (
    <Container>
      <Header />
      <ProductDetail>
        <img alt={name} src={image} />
        <InfoContainer>
          <h1>{name}</h1>
          <h2>R${price}</h2>
          <h2>Quantidade: {}</h2>
          {
            <ReturnProductOptions
              state={state}
              options={options}
              setOptions={setOptions}
            />
          }
          <button>Adicionar ao carrinho</button>
        </InfoContainer>
      </ProductDetail>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const ProductDetail = styled.div`
  margin: 230px 200px 100px;
  height: 100%;
  display: flex;

  img {
    width: 36vw;
    object-position: center;
    object-fit: cover;
    aspect-ratio: 1 / 1;
  }
`;

const InfoContainer = styled.div`
  margin: 122px 0px 0px 108px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  h2 {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;
