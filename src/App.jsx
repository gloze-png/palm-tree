import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Index from "./Pages/Index";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="dark:bg-[#4F2C60] relative">
      <Navbar theme={theme} setTheme={setTheme} />
      
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
