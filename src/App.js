import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { VStack } from "@chakra-ui/react";
import List from "./pages/List/List";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Covoiturage" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
