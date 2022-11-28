import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import Highlight from "../../components/Highlight";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Store() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const URL = "https://masquenada-api.onrender.com/store";
    axios
      .get(URL)
      .then((res) => {
        const productsList = res.data;
        let newProductList = [];
        productsList.map((product) => {
          newProductList = [...newProductList, product];
        });
        setProducts(newProductList);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <Container>
      <Header />
      <HighlightsContainer>{products.map(Highlight)}</HighlightsContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div``;

const HighlightsContainer = styled.div`
  margin-top: 180px;
  margin-bottom: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
