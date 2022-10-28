import Error from "./components/Error";
import { Layout } from "./components/Layout";
import { FormSection } from "./components/FormSection";
import { ModalSearchRecipe } from "./components/ModalSearchRecipe";
import { Results } from "./components/views/Results";
import { useGetAllRecipes } from "./hooks/useGetAllRecipes";
import { useSearchRecipes } from "./hooks/useSearchRecipes";
import { useSetRecipesResults } from "./hooks/useSetRecipesResults"
import { useSetTypeOfDietResults } from "./hooks/useSetTypeOfDietResults"
import { useChangeView } from "./hooks/useChangeView";
import { useRecipesByTypeOfDiet } from "./hooks/useRecipesByTypeOfDiet";
import { orderRecipes } from "./utils/orderUtils";
import { transformSearch, transformTitles, transformTypesOfDiet } from "./utils/transformData";
import { getTypesOfDiet } from "./helpers/getAllTypes";

import 'semantic-ui-css/semantic.min.css';


function App() {
    const {
      recipes,
      todayRecipe,
      ingredients,
      handleChangeOrder,
      order,
      error,
      typeOrder,
      handleChangeTypeOrder
    } = useGetAllRecipes();
  
    const {
      handleChangeSearchRecipe,
      handleClickSearch,
      search,
      searchRecipe,
      recipeToView,
    } = useSearchRecipes();
    
    const { 
      handleChangeView, 
      viewType 
    } = useChangeView();
/* 
    const {
      handleSelectedRecipe, 
      selectedRecipe 
    } = useSelectedRecipe(); */

    const titleRecipes = transformTitles(recipes);
    const {
      handleChangeRecipesResults, 
      recipesResults 
    } = useSetRecipesResults(titleRecipes);


    const typesOfDiet = transformTypesOfDiet(getTypesOfDiet(recipes));
    const {
      handleChangeTypeOfDietResults, 
      typeOfDietResults 
    } = useSetTypeOfDietResults(typesOfDiet);

    const {
      searchByType,
      recipesByType,
      handleClickSearchRecipesByType,
      typeOfDiet,
      handleChangeSearchRecipesByType,
    } = useRecipesByTypeOfDiet();

  return (
    <Layout>
      <>
        {error && <Error />}
        { recipes?.length>0 && 
          <FormSection
            handleChangeSearchRecipe={handleChangeSearchRecipe}
            handleClickSearch={handleClickSearch}
            searchRecipe={searchRecipe}

            ingredients={transformSearch(ingredients)}
            handleChangeRecipesResults={handleChangeRecipesResults}
            handleChangeTypeOfDietResults={handleChangeTypeOfDietResults}
            recipesResults={recipesResults.length > 0 ? recipesResults : titleRecipes}
            typeOfDietResults={typeOfDietResults.length > 0 ? typeOfDietResults : typesOfDiet}

            handleChangeSearchRecipesByType={handleChangeSearchRecipesByType}
            handleClickSearchRecipesByType={handleClickSearchRecipesByType}
            typeOfDiet={typeOfDiet}

            handleClickChangeOrder={handleChangeOrder}
            order={order}
            handleChangeTypeOrder={handleChangeTypeOrder}
          />
        }
        {/* {search && (
            <ModalSearchRecipe
              recipeToView={recipeToView}
              handleClickSearch={handleClickSearch}
              openModal={search}
            />
        )} */}

        {(recipes.length > 0 || recipesByType?.length > 0) && (
          <Results
            recipes={orderRecipes(recipes, order, typeOrder)}
            recipesByType={recipesByType}
            todayRecipe={todayRecipe}
            viewType={viewType}
            typeOfDiet={typeOfDiet}
            recipeToView={recipeToView}
          >            
          </Results>
        )}
      </>
    </Layout>
  );
}

export default App;
