import { useEffect, useState } from "react";
import { getAllRecipes } from "../helpers/getAllRecipes";
import { getRandomRecipe } from "../helpers/getRandomRecipe";
import { getAllIngredients } from "../helpers/getAllIngredients";
import { ORDER_TYPE, ORDER_ASC, ORDER_DESC } from "../utils/constants";
 

export const useGetAllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [todayRecipe, setTodayRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const [error, setError] = useState(false);
  const [order, setOrder] = useState(ORDER_ASC);
  const [typeOrder, setTypeOrder] = useState(ORDER_TYPE);
  

  const getRecipes = async () => {
    try {
      const recipesList = await getAllRecipes();
      setRecipes(() => recipesList);
      setTodayRecipe(() => getRandomRecipe(recipesList));
      setIngredients(() => getAllIngredients(recipesList));
    } catch (error) {
      setError(() => true);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const handleChangeOrder = () => {
    setOrder((order) => (order ===  ORDER_ASC ? ORDER_ASC : ORDER_DESC));
  };

  const handleChangeTypeOrder = (event, data) => {
    const value = data.value?.toString();

    if (value) {
      setTypeOrder(() => value);
    }
  };

  return {
    recipes,
    todayRecipe,
    ingredients,
    handleChangeOrder,
    order,
    error,
    typeOrder,
    handleChangeTypeOrder
  };
};


      