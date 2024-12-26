import React from "react";
import Header from "./components/layout/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/page/Home/Home";
import Admin from "./components/page/Admin/Admin";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default App;
