import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatIndex from "./pages/CatIndex";
import CatShow from "./pages/CatShow";
import CatNew from "./pages/CatNew";
import CatEdit from "./pages/CatEdit";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

const App = () => {
  const [ cats, setCats ] = useState([])
  useEffect(() => {
    readCat();
  }, []);
  const readCat = () => {
    fetch("http://localhost:3000/cats")
    .then((response) => response.json())
    .then((payload) => setCats(payload))
    .catch((error) => console.log(error))
  };
const createCat = (cat) => {
  fetch("http://localhost:3000/cats", {
    body: JSON.stringify(cat), 
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST"
  })
    .then((response) => response.json())
    .then((payload) => readCat(payload))
    .catch((error) => console.log(error))
}


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
