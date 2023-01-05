import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const CatShow = ({ cats }) => {
  const { id } = useParams();
  const cat = cats?.find((cat) => cat.id === +id);
  return (
    <div>
      <img src={cat.image}
      style= {{
        display: "flex",
        alignItems: "center",
        height: "500px",
        marginLeft: "auto",
        marginRight: "auto"
      }}
      ></img>
      <h1 style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        backgroundColor: "rgb(57, 209, 11)"
      }}>Name: {cat.name}</h1>
      <h3 style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        backgroundColor: "rgb(57, 209, 11)"
      }}>Age: {cat.age}</h3>
      <h2 style={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        backgroundColor: "rgb(57, 209, 11)"
      }}>About me: {cat.enjoys}</h2>
    </div>
  );
};

export default CatShow;
