import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CatNew = ({ createCat }) => {
  const navigate = useNavigate();
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });
  const handleChange = (e) => {
    setNewCat({...newCat, [e.target.name]: e.target.value});
  };

  const handleSubmit = () => {
    createCat(newCat);
    navigate("/catindex");
  };
  return (
    <>
      <Form>
        <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input
            // id="name"
            name="name"
            onChange={handleChange}
            placeholder="What is your name?"
            type="text"
            value={newCat.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleName">Age</Label>
          <Input
            // id="name"
            name="age"
            onChange={handleChange}
            placeholder="What is your age?"
            type="number"
            value={newCat.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEnjoy">Enjoys</Label>
          <Input
            // id="name"
            name="enjoys"
            onChange={handleChange}
            placeholder="What do you enjoy?"
            type="text"
            value={newCat.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleImage">Selfie</Label>
          <Input
            // id="name"
            name="image"
            onChange={handleChange}
            placeholder="post a Selfie?"
            type="url"
            value={newCat.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} name="submit">Submit</Button>
      </Form>
    </>
  );
};

export default CatNew;
