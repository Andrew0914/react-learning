import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientsHandler = (ingredient) => {
    setIngredients((prevIngridients) => [
      ...prevIngridients,
      { id: Math.random(), ...ingredient },
    ]);
  };

  const removeIngridientHandler = (id) => {
    setIngredients((prevIngridients) =>
      prevIngridients.filter((ingridient) => ingridient.id !== id)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngridient={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={removeIngridientHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
