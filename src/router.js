import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./components/auth/SignIn";
import Admin from "./pages/Admin";
import Client from "./pages/Client";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/client" element={<Client />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
