import styled from "styled-components";

export default function Overlay({ showCart, setShowCart }) {
  return (
    <OverlayCart showCart={showCart} onClick={() => setShowCart(false)} />
  );
}

const OverlayCart = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.showCart ? "initial" : "none"};
`;