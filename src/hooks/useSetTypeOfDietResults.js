
import { useEffect, useState } from "react";
import { getResultsByRegex } from "../helpers/getResultsByRegex";

export const useSetTypeOfDietResults = (recipes) => {
    const [typeOfDietResults, setTypeOfDietResults] = useState([]);
    const [searching, setSearching] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        const getTypesOfDietResults = () => {
            const typesOfDiet = getResultsByRegex(recipes, searchValue);
            setTypeOfDietResults(typesOfDiet);
            return () => {
                setTypeOfDietResults([]);
            }
        };

    if (searching && searchValue) {
        getTypesOfDietResults();
    } else {
        setTypeOfDietResults([]);
    }

  }, [searching]);

  const handleChangeTypeOfDietResults = (e) => {
    const value = e.target.value;
    if (value.length > 2) {
        setSearching(true);
    } else {
        setSearching(false);
    }
    
    setSearchValue(() => value);
  };


  return {
    handleChangeTypeOfDietResults,
    typeOfDietResults
  };
};
