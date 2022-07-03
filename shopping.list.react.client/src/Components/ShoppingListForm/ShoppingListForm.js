import React, { useRef } from "react";

import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";

function ShoppingListForm(props) {
  const nameRef = useRef("");
  const idRef = useRef(0);

  function submitHandler(event) {
    console.log("clicked");
    event.preventDefault();

    const item = {
      id: idRef.current.value,
      name: nameRef.current.value,
      isCollected: false,
    };

    props.onAddItem(item);
  }

  function cancelEditingHandler(event) {
      console.log('clicked');
      event.preventDefault();
      props.onCancelEditing();
  }
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Shopping Item"
          defaultValue={props.itemToEdit['name']}
          ref={nameRef}
        />
        <Form.Control
          type="hidden"
          placeholder="Shopping Item"
          defaultValue={props.itemToEdit['id']}
          ref={idRef}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        { props.isEditing ? "Edit Item" : "Add Item"}
      </Button>

      { props.isEditing && <Button variant="primary" type="submit" onClick={cancelEditingHandler}>Cancel Editing</Button> }
    </Form>
  );
}

export default ShoppingListForm;
