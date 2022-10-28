import { useState } from "react";

export const useSelectedRecipe = () => {

  const [selectedRecipe, setSelectedRecipe] = useState('');

  const handleSelectedRecipe =  (e, { result }) => {
        setSelectedRecipe(result.title); 
  }

  return { 
        handleSelectedRecipe, 
        selectedRecipe 
    };
};
