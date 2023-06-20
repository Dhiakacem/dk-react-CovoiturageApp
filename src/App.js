import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { VStack } from "@chakra-ui/react";
import List from "./pages/List/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Covoiturage" element={<List/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// -------  Social links with dark mode chakra UI - -------- //

/* import { IconButton } from "@chakra-ui/button";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { VStack, useColorMode } from "@chakra-ui/react";

const { colorMode, toggleColorMode } = useColorMode();
const isDark = colorMode === "dark";
<VStack>
<IconButton icon={<FaLinkedin />} isRound='true' onClick={toggleColorMode}></IconButton>
<IconButton ml={2} icon={<FaInstagram />} isRound='true' onClick={toggleColorMode}></IconButton>
<IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={toggleColorMode}></IconButton>
<IconButton ml={2} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>

</VStack> */
/*

 */
