import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}