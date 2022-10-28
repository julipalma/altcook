import { useEffect, useState } from "react";
import { getOneRecipe } from "../helpers/getOneRecipe";

export const useSearchRecipes = () => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [search, setSearch] = useState(false);
  const [recipeToView, setRecipeToView] = useState({});
  
  useEffect(() => {
    const getRecipe = async () => {
      const recipeRes = await getOneRecipe(searchRecipe);
      setRecipeToView(recipeRes);
      return () => {
        setRecipeToView({});
      }
    };

    if (search && searchRecipe) {
      getRecipe();
    } else {
      setRecipeToView({});
    }

  }, [search]);

  const handleChangeSearchRecipe = (e) => {
    const value = e.target.value;
    if (value.length > 3) {
      setSearch(true);
    } else {
      setSearch(false);
    }
    
    setSearchRecipe(() => value);
  };

  const handleClickSearch = () => {
    if (searchRecipe) {
      setSearch(() => !search);
    }
  };

  return {
    search,
    recipeToView,
    handleClickSearch,
    searchRecipe,
    handleChangeSearchRecipe,
  };
};
