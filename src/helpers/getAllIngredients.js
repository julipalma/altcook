const getIngredientsNames = (ingredients) => {
    let result = []
    if (ingredients) {
        result = ingredients?.map((val) => val.name);
    }
    return result;    
}

export const getAllIngredients = (recipes) => {
    const ingredients = recipes.reduce(function(a,b) {
        let result = a.concat(getIngredientsNames(b.ingredients));
        return result;
    }, []);
    return [...new Set(ingredients)];
};
