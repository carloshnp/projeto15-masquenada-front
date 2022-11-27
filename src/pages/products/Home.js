import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import ImageSlider from "../../components/ImageSlider";
import image1 from "../../assets/imgs/image_1.png";
import image2 from "../../assets/imgs/image_2.png";
import Highlights from "../../components/Highlights";

export default function Home() {
  const slides = [image1, image2];

  return (
    <Container>
      <Header />
      <HomeContainer>
        <SliderContainer>
          <ImageSlider slides={slides} />
        </SliderContainer>
        <Highlights />
      </HomeContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
`;

const HomeContainer = styled.div``;

const SliderContainer = styled.div`
  margin-top: 130px;
  width: 100%;
  height: 100%;
`;

const HighlightsContainer = styled.div``;
