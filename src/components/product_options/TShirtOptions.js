import styled from "styled-components";
import Size from "./Size";
import Color from "./Color";
import { useEffect, useState } from "react";

export default function TShirtOptions(props) {
  const { shirtColor, shirtSize } = props.product;
  const { options, setOptions } = props;
  const [sizeOption, setSizeOption] = useState([]);
  const [colorOption, setColorOption] = useState([]);

  console.log(props.product);
  console.log(options);

  useEffect(() => {
    const arr = [];
    const newOptions = arr.concat(sizeOption, colorOption);
    setOptions(newOptions);
  }, []);

  // console.log(props.product);
  console.log(sizeOption);
  console.log(colorOption);

  return (
    <Container>
      <h1>Tamanho:</h1>
      <SizeContainer>
        {shirtSize.map((size) => (
          <Size
            size={size}
            sizeOption={sizeOption}
            setSizeOption={setSizeOption}
          />
        ))}
      </SizeContainer>
      <h1>Cor:</h1>
      <ColorContainer>
        {shirtColor.map((color) => (
          <Color
            color={color}
            colorOption={colorOption}
            setColorOption={setColorOption}
          />
        ))}
      </ColorContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 30px;
    font-weight: 400;
  }
`;

const SizeContainer = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
`;

const ColorContainer = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 400;
`;
