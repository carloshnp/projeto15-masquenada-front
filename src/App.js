import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/assets/style/GlobalStyle";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
    </BrowserRouter>
  );
}