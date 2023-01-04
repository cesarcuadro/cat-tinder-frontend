import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow";
import CatNew from "./pages/CatNew";
import CatEdit from "./pages/CatEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import mockCats from "./mockCats";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

const App = () => {
  const createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(cat),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((responce) => Response.json())
      .then((payload) => readCat())
      .catch((errors) => console.log("Cat create errors:", errors));
  };

  const [cats, setCats] = useState(mockCats);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
