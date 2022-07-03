import { Fragment, useEffect, useState, useCallback } from "react";

import ShoppingList from "./Components/ShoppingList/ShoppingList";
import ShoppingListForm from "./Components/ShoppingListForm/ShoppingListForm";

function App() {
  const [list, setShoppingList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [itemToEdit, setItemToEdit] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function deleteItemHandler(id) {
    console.log("grandpa" + id);
    const response = await fetch("https://localhost:7010/ShoppingList", {
      method: "DELETE",
      body: id,
    });
    const data = await response.json();
    console.log(data);
  }

  function populateFormHandler(itemToEdit) {
    console.log(itemToEdit);
    setItemToEdit(itemToEdit);
    setIsEditing(true);
  }

  function cancelEditingHandler() {
    console.log('clicked');
    setIsEditing(false);
  }

  const fetchShoppingList = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://localhost:7010/ShoppingList");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setShoppingList(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchShoppingList();
  }, [fetchShoppingList]);

  async function addItemHandler(item) {
    const response = await fetch("https://localhost:7010/ShoppingList", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found no movies. </p>;

  if (list.length > 0) {
    content = (
      <ShoppingList
        items={list}
        onDeleteItem={deleteItemHandler}
        onEditItem={populateFormHandler}
      />
    );
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading</p>;
  }

  return (
    <Fragment>
      <main>
        <ShoppingListForm
          onCancelEditing={cancelEditingHandler}
          onAddItem={addItemHandler}
          isEditing={isEditing}
          itemToEdit={itemToEdit}
        ></ShoppingListForm>
        {content}
      </main>
    </Fragment>
  );
}

export default App;
