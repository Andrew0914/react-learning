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
  return (
    <div className="App">
      <IngredientForm onAddIngridient={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={() => {}} />
      </section>
    </div>
  );
}

export default Ingredients;
