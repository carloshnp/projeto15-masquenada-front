import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Highlight(props) {
  const {
    image,
    name,
    description,
    price,
    orders,
    inStock,
    type,
    shirtSize,
    shirtColor,
    bootSize,
    ballYear,
    _id,
  } = props;

  return (
    <Link
      key={_id}
      to={`/product/${name}`}
      state={{
        image,
        name,
        price,
        type,
        orders,
        inStock,
        shirtSize,
        shirtColor,
        bootSize,
        ballYear
      }}
    >
      <Container>
        <HighlightImage alt={description} src={image} />
        <HighlightName>{name}</HighlightName>
        <Price>R${price}</Price>
      </Container>
    </Link>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HighlightImage = styled.img`
  width: 36vw;
  object-position: center;
  object-fit: cover;
  aspect-ratio: 1 / 1;
`;
const HighlightName = styled.h1`
  margin-top: 30px;
  font-size: 36px;
  font-weight: 700;
`;

const Price = styled.div`
  margin-top: 10px;
  font-size: 30px;
`;
