import styled from "styled-components";

export default function Color(props) {
  const { color, colorOption, setColorOption } = props;
  const isColorOption = colorOption.includes(color);
  const isSelected = isColorOption;
  // console.log(size);

  function selectOption() {
    if (!isColorOption) {
      const newColorOption = [color];
      setColorOption(newColorOption);
    } else {
      setColorOption([]);
    }
  }

  return (
    <Container isSelected={isSelected} onClick={selectOption}>
      <h1>{color}</h1>
    </Container>
  );
}

const Container = styled.div`
  margin-right: 40px;
  cursor: pointer;

  h1 {
    font-size: 20px;
    font-weight: 400;
    text-decoration: ${(props) => (props.isSelected ? "underline" : "none")};
  }
`;
