import styled from "styled-components";

export default function Size(props) {
  const { size, sizeOption, setSizeOption } = props;
  const isSizeOption = sizeOption === size;
  const isSelected = isSizeOption;
  // console.log(size);

  function selectOption() {
    if (!isSizeOption) {
      setSizeOption(size);
    } else {
      setSizeOption('');
    }
  }

  return (
    <Container isSelected={isSelected} onClick={selectOption}>
      <h1>{size}</h1>
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
