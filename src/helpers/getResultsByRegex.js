export const getResultsByRegex = (list, searchValue) => {
    console.log(searchValue)
    const regex = new RegExp(searchValue, 'i');
    console.log(list)
    const result = list.filter(({title}) => title.match(regex));
  
    return result;
}