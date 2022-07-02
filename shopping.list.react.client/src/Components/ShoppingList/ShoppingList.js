import { useEffect, useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";

import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = () => {
  const [list, setShoppingList] = useState([]);

  useEffect(() => {
    const fetchShoppingList = async () => {
      const response = await fetch("https://localhost:7010/ShoppingList");
      const responseData = await response.json();

      const loadedList = [];

      for (const key in responseData) {
        loadedList.push({
          id: key,
          name: responseData[key].name,
          isCollected: responseData[key].isCollected.toString(),
        });
      }

      setShoppingList(loadedList);
      console.log(response);
      console.log(responseData);
    };

    fetchShoppingList();
  }, []);

  const shoppingList = list.map((item) => (
    <ShoppingListItem
      key={item.id}
      id={item.id}
      name={item.name}
      isCollected={item.isCollected}
    />
  ));

  return (
    <div>
      <ListGroup>{shoppingList}</ListGroup>
    </div>
  );
};

export default ShoppingList;
