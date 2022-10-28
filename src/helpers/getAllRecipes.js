import { requestOptions } from "../utils/requestConfig";
import { API_URL } from "../utils/constants";

export const getAllRecipes = async () => {
  const url = `${ API_URL }/recipes`;
  const resp = await fetch(url, requestOptions);
  const recipesData = await resp.json();
  
  return recipesData;
};