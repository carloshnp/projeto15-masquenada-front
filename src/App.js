import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Checkout from "./pages/Checkout/Checkout";
import Sucess from "./pages/Checkout/Sucess";
import AboutUs from "./pages/Infos/AboutUs";
import Contact from "./pages/Infos/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
  );
}