import { Fragment, useEffect, useState, useCallback } from "react";

import ShoppingList from "./Components/ShoppingList/ShoppingList";
import ShoppingListForm from "./Components/ShoppingListForm/ShoppingListForm";

function App() {
  const [list, setShoppingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    content = <ShoppingList items={list} />;
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
        <ShoppingListForm onAddItem={addItemHandler}></ShoppingListForm>
        {content}
      </main>
    </Fragment>
  );
}

export default App;
