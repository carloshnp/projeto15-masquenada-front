import styled from "styled-components";
import Footer from "../../components/Footer";
import Brasil from "../../assets/imgs/brasil.png";

export default function AboutUs() {
  return (
    <>
        <AboutUsContainer>
          <img src={Brasil} alt="Brasil" />
          <h1>CONHEÇA NOSSA MARCA</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </AboutUsContainer>
      <Footer />
    </>
  )
}

const AboutUsContainer = styled.div`
  width: 100vw;
  max-width: 600px;
  margin: 0 auto;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;

  img {
    width: 70px;
    margin-bottom: 20px;
  }

  h1 {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 26px;
    color: #2D5C76;
    padding-bottom: 10px;
    border-bottom: 2px solid #96c0a7;
  }

  p {
    text-align: justify;
    line-height: 1.4;
  }
`