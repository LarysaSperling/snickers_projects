import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import Cart from "./components/cart";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
