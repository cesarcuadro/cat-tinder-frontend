import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const CatNew = () => {
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
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
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEnjoy">Enjoys</Label>
          <Input
            // id="name"
            name="Enjoys"
            onChange={handleChange}
            placeholder="What do you enjoy?"
            type="text"
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
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </>
  );
};

export default CatNew;
