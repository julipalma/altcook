import { requestOptions } from "../utils/requestConfig";
import { API_URL } from "../utils/constants";

export const getOneRecipe = async (recipeToSearch) => {
  const url = `${API_URL}/recipes?title_like=${
    encodeURI(recipeToSearch.charAt(0).toUpperCase() + recipeToSearch.slice(1))
  }`;
  const resp = await fetch(url, requestOptions);
  const recipesData = await resp.json();
  return recipesData[0];
};
