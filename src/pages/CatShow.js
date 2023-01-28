import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";

const CatShow = ({ cats }) => {
  const { id } = useParams();
  const currentCat = cats?.find((cat) => cat.id === +id);
  return (
<>
  <Card className="my-2">
    <CardImg
      alt="Card image cap"
      src={currentCat.image}
      style={{
        height: 180
      }}
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
        {currentCat.name}
      </CardTitle>
      <CardText>
        {currentCat.enjoys}
      </CardText>
      <CardText>
        <small className="text-muted">
          {currentCat.age}
        </small>
      </CardText>
    </CardBody>
    <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
    <Button>Edit</Button>
</NavLink>
  </Card>
</>
  );
};

export default CatShow;
