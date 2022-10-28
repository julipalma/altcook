
import { useEffect, useState } from "react";
import { getResultsByRegex } from "../helpers/getResultsByRegex";

export const useSetRecipesResults = (recipes) => {
    const [recipesResults, setRecipesResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const getRecipesResults = () => {
            const recipeRes = getResultsByRegex(recipes, searchValue);
            setRecipesResults(recipeRes);
            return () => {
                setRecipesResults([]);
            }
        };

    if (searching && searchValue) {
        getRecipesResults();
    } else {
        setRecipesResults([]);
    }

  }, [searching]);

  const handleChangeRecipesResults = (e) => {
    const value = e.target.value;
    if (value.length > 2) {
        setSearching(true);
    } else {
        setSearching(false);
    }
    
    setSearchValue(() => value);
  };


  return {
    recipesResults,
    handleChangeRecipesResults
  };
};
