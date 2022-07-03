import ListGroup from "react-bootstrap/esm/ListGroup";

const ShoppingListItem = (props) => {
    
    return (
        <ListGroup.Item>{props.id} - {props.name} - {props.isCollected}</ListGroup.Item>
    )
}

export default ShoppingListItem;

