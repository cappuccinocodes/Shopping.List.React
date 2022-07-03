import React, { useRef } from "react";

import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";

function ShoppingListForm(props) {
  const nameRef = useRef("");

  function submitHandler(event) {
      console.log('clicked');
    event.preventDefault();

    const item = {
      id: 0,
      name: nameRef.current.value,
      isCollected: false
    };

    props.onAddItem(item);
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Shopping Item" ref={nameRef} />
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default ShoppingListForm;
