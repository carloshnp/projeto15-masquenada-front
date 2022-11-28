import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Highlight from "./Highlight";

export default function Highlights() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const URL = "http://localhost:5000/store";

    axios
      .get(URL)
      .then((res) => {
        const productsList = res.data;
        let newProductList = [];
        productsList.map((product) => {
          while (newProductList.length < 2) {
          if (product.orders > 280) {
            newProductList = [...newProductList, product];
            console.log('teste');
          }}
        });
        setProducts(newProductList);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  return (
    <Container>
      <Title>AS MAIS PEDIDAS</Title>
      <SubTitle>
        A bola está rolando e os nossos estoques queimando! Peça antes do hexa
        chegar!
      </SubTitle>
      <HighlightsContainer>{products.map(Highlight)}</HighlightsContainer>
    </Container>
  );
}

const Container = styled.div`
  margin: 50px 10vh 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
`;

const SubTitle = styled.h2`
  margin: 20px 0 60px;
  font-size: 30px;
`;

const HighlightsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
`;
