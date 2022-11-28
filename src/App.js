import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Checkout from "./pages/Checkout/Checkout";
import Sucess from "./pages/Checkout/Sucess";
import AboutUs from "./pages/Infos/AboutUs";
import Contact from "./pages/Infos/Contact";
import Home from "./pages/products/Home";
import ProductPage from "./pages/products/ProductPage";
import Overlay from "./components/Overlay";
import UserContext from "./context/UserContext";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Overlay showCart={showCart} setShowCart={setShowCart} />
      <UserContext.Provider value={{ showCart, setShowCart, cartProducts, setCartProducts }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}