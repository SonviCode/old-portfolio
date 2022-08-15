import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

function App() {
  return (
    
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home/>}/>
          <Route path="/projet" element={<Project/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
