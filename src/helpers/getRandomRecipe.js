export const getRandomRecipe = (recipes) => {
  const recipeRes = recipes.find((recipe) => {
      return (recipe.title.startsWith('Arroz'));
  }) || undefined;

  if (recipeRes === undefined) {
    return {};
  }

  return recipeRes;
};