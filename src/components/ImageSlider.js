import { useState } from "react";
import styled from "styled-components";

export default function ImageSlider({ slides }) {
  const [index, setIndex] = useState(0);
  const img = slides[index];
  const isFirstSlide = index === 0;
  console.log(img);

  function goToPrevious() {
    const newIndex = isFirstSlide
      ? slides.length - 1
      : index - 1;
    setIndex(newIndex);
  }

  function goToNext() {
    const newIndex = isFirstSlide
      ? slides.length - 1
      : index - 1;
    setIndex(newIndex);

  }

  return (
    <SliderContainer>
      <Arrow pointer={"left"} onClick={goToPrevious}>❰</Arrow>
      <Arrow pointer={"right"} onClick={goToNext}>❱</Arrow>
      <BackgroundContainer img={img} />
      <DotsContainer></DotsContainer>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  position: relative;
  background-color: #000000;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  ${(props) => props.pointer}: 32px;
  transform: translate(0, -50%);
  font-size: 45px;
  color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.5s;
  }
`;

const BackgroundContainer = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
  opacity: 0.7;
  aspect-ratio: 1920 / 900;
  transition: 0.5s ease-out;
`;

const DotsContainer = styled.div``;
