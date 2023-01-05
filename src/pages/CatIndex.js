import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";

const CatIndex = ({ cats }) => {
  return (
    <div className="body">
    <main>
      {cats?.map((cat, index) => {
        return (
          <>
          <div className="card-index-cards">
            <Card
              color="light"
              style={{
                width: "18rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <img alt="Sample" src={cat.image} />
              <CardBody>
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {cat.age}
                </CardSubtitle>
                <NavLink to={`/catshow/${cat.id}`}>
                  <Button>Sniff</Button>
                </NavLink>
              </CardBody>
            </Card>
            </div>
          </>
        );
      })}
    </main>
    </div>
  );
};

export default CatIndex;
