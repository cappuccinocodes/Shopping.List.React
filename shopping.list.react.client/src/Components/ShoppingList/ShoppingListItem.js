import ListGroup from "react-bootstrap/esm/ListGroup";
import Button from "react-bootstrap/button";

const ShoppingListItem = (props) => {
  function deleteHandler(event) {
    event.preventDefault();

    props.onDelete(props.id);

  }

  function updateHandler(event) {
    event.preventDefault();

    props.onUpdate({
      id: props.id,
      name: props.name
    });

  }
  return (
    <ListGroup.Item>
      {props.id} - {props.name} - {props.isCollected}
      <Button onClick={deleteHandler}>Delete</Button>
      <Button onClick={updateHandler}>Edit</Button>
    </ListGroup.Item>
  );
};

export default ShoppingListItem;
