import { requestOptions } from "../utils/requestConfig";
import { API_URL } from "../utils/constants";

export const getRecipesByTypeOfDiet = async (typeToSearch) => {
  const url = `${API_URL}/recipes?type_like=${encodeURI(typeToSearch)}`;
  const resp = await fetch(url, requestOptions);
  const recipesData = await resp.json();
  return recipesData;
};
