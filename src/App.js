import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import List from "./pages/List/List";
import Search from "./pages/Search/Search";
import Details from "./pages/Details/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Edit" element={<Profile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Covoiturage" element={<List/>}/>
        <Route path="/Profile" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
