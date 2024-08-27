import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './page/Home';
import Navbar from './component/Navbar/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route path="/list" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/redirect/:id" element={<Redirect />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
