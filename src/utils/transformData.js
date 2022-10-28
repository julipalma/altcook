export const transformSearch = (list) => {
    list = list.sort();
    const response = list.map((element) => ({'key' : element, 'text' : element, 'value' : element }))
    return response;
};

export const transformTitles = (recipes) => {
    const responseRecipes = recipes.map(({ title }) => ({ 'title' : title }));
    return responseRecipes;
};

export const transformTypesOfDiet = (list) => {
    list = list.sort();
    const response = list.map((element) => ({'title' : element }))
    return response;
}