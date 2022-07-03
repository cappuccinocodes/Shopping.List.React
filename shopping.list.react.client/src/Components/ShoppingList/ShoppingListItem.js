import ListGroup from "react-bootstrap/esm/ListGroup";
import Button from "react-bootstrap/button";

const ShoppingListItem = (props) => {
  function deleteHandler(event) {
    event.preventDefault();

    props.onDelete(props.id);
  }
  return (
    <ListGroup.Item>
      {props.id} - {props.name} - {props.isCollected}
      <Button onClick={deleteHandler}>Delete</Button>
    </ListGroup.Item>
  );
};

export default ShoppingListItem;
