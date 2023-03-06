import { useEffect, useState } from "react";
import { getFilteredRecipes } from "../helpers/getFilteredRecipes";

export const useSearch = () => {
  const [search, setSearch] = useState(false);
  const [recipeToView, setRecipeToView] = useState({});

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [ingredients, setIngredients] = useState([]);
  
  useEffect(() => {
    const getRecipe = async () => {
      const recipeRes = await getFilteredRecipes(type, title, ingredients);
      setRecipeToView(recipeRes);
      return () => {
        setRecipeToView({});
      }
    };

    if (search && (title || type || ingredients )) {
      getRecipe();
    } else {
      setRecipeToView({});
    }

  }, [search]);

  const handleSubmit = (data, e) => {
    if (title || type || ingredients) {
      setSearch(() => !search);
    }    
  };


  const handleSelectedRecipe = (data, e) => {
    setTitle(() => e.result.title)
  };
  const handleSelectedType = (data, e) => {
    setType(() => e.result.title)
  };
  const handleSelectedIngredients = (data, e) => {
    setIngredients(() => e.value)
  };

  return {
    search,
    recipeToView,
    handleSubmit,
    handleSelectedRecipe, 
    handleSelectedType, 
    handleSelectedIngredients
  };
};
