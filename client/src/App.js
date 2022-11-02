import { Route, Router, Routes } from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home/>}/>
        <Route path="Login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
