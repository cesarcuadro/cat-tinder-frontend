import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const CatShow = ({ cats }) => {
  const { id } = useParams();
  const cat = cats?.find((cat) => cat.id === +id);
  return (
    <Card
      color="light"
      style={{
        width: "18rem",
      }}
    >
      <img alt="Sample" src={cat.image} />
      <CardBody>
        <CardTitle tag="h5">{cat.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {cat.age}
        </CardSubtitle>
        <CardText>{cat.enjoys}</CardText>
      </CardBody>
    </Card>
  );
};

export default CatShow;
