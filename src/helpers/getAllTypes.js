const getTypes = (types) => {
    let result = []
    if (types) {
        result = types?.map((val) => val);
    }
    return result;    
}

export const getTypesOfDiet = (recipes) => {
    const responsetypesOfDiet = recipes.reduce(function(a,b) {
        let result = a.concat(getTypes(b.type));
        return result;
      }, []);
    return [...new Set(responsetypesOfDiet)];
};