import { compareDatesForOrder } from "./dateUtils";
import { ORDER_TYPE, ORDER_ASC, ORDER_DESC } from "./constants";

export const orderRecipes = (
  recipes,
  order,
  typeOrder
) => {
  let responseRecipes = [];

  if (typeOrder === ORDER_TYPE) {
    if (order === ORDER_ASC) {
      return recipes.sort();
    }
    if (order === ORDER_DESC) {
      return recipes.sort().reverse();
    }
  }
  return responseRecipes;
};