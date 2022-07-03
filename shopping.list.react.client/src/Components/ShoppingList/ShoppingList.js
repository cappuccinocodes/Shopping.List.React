import ListGroup from "react-bootstrap/ListGroup";

import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = (props) => {
    function onDelete(id) {
        props.onDeleteItem(id);
    }
    const shoppingList = props.items.map((item) => (
        <ShoppingListItem
          onDelete={onDelete}
          key={item.id}
          id={item.id}
          name={item.name}
          isCollected={item.isCollected.toString()}
        />
      ));
      
      return (
        <div>
          <ListGroup>{shoppingList}</ListGroup>
        </div>
      );
  }

export default ShoppingList;
