import { useEffect, useState } from "react";
import { getRecipesByTypeOfDiet } from "../helpers/getRecipesByTypeOfDiet";

export const useRecipesByTypeOfDiet = () => {
  const [typeOfDiet, setTypeOfDiet] = useState("");
  const [searchByType, setSearchByType] = useState(false);
  const [recipesByType, setRecipesByType] = useState({});
  
  useEffect(() => {
    const getRecipes = async () => {
      const res = await getRecipesByTypeOfDiet(typeOfDiet);
      setRecipesByType(() => res);
      return () => {
        setRecipesByType({});
      }
    };

    if (searchByType && typeOfDiet) {
      getRecipes();
    } else {
      setRecipesByType({});
    }
  }, [searchByType]);

  const handleChangeSearchRecipesByType = (e) => {
    const value = e.target.value;
    if (value.length > 2) {
      setSearchByType(true);
    } else {
      setSearchByType(false);
    }
    setTypeOfDiet(value);
  };

  const handleClickSearchRecipesByType = (e) => {
    if (typeOfDiet) {
      setSearchByType(() => !searchByType);
    }
  };

  return {
    searchByType,
    recipesByType,
    handleClickSearchRecipesByType,
    typeOfDiet,
    handleChangeSearchRecipesByType,
  };
};
