import { getRecipesByTypeOfDiet } from "./getRecipesByTypeOfDiet";
import { getResultsByRegex } from "./getResultsByRegex";

export const getFilteredRecipes = async (type, title, ingredients) => {
  
  let resp = await getRecipesByTypeOfDiet(type);
  console.log(resp, title)
  resp = getResultsByRegex(resp, title)
  console.log(resp)
  return resp;
};



//busco recetas por tipo de dieta, de esas, busco las que tengan en el titulo alguna palabra y de esas, busco las que tengan los ingredientes marcados
