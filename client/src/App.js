import { Route, Router, Routes } from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Register from "./Pages/Register";



function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
