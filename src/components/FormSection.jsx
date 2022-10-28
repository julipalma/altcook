import { Button, Dropdown, Form, Grid, Segment, Search } from "semantic-ui-react";
import { ORDER_DESC, VIEW_TYPE_GRID, VIEW_TYPE_LIST } from "../utils/constants";

const options = [
  { key: VIEW_TYPE_LIST, text: "Lista", value: VIEW_TYPE_LIST },
  { key: VIEW_TYPE_GRID, text: "Grilla", value: VIEW_TYPE_GRID },
];

const typeOrder = [
  { key: "title", text: "Título", value: "title" },
];

export const FormSection = ({
  handleChangeSearchRecipe,
  handleChangeSearchRecipesByType,
  handleChangeTypeOrder,
  handleClickSearch,
  handleClickChangeOrder,
  handleClickSearchRecipesByType,
  order,
  searchRecipe,
  typeOfDiet, 
  ingredients, 
  isLoadingRecipe, 
  isLoadingDiet, 
  recipes,
  handleChangeRecipesResults, 
  handleChangeTypeOfDietResults,
  recipesResults, 
  typeOfDietResults
}) => {
  return (
    <Form>
      <Grid columns='equal'>
          <Grid.Column>
            <Form.Field inline>
              <Segment.Group>
                <Segment>Filtros</Segment>
                <Segment.Group>
                  <Segment>
                    <Search
                      fluid
                      loading={isLoadingRecipe}
                      placeholder='Buscar por receta'
                      onSearchChange={handleChangeRecipesResults}
                      results={recipesResults}
                    />
                  </Segment>
                  <Segment>
                    <Search
                      fluid
                      loading={isLoadingDiet}
                      placeholder='Buscar por tipo de dieta'
                      onSearchChange={handleChangeTypeOfDietResults}
                      results={typeOfDietResults}
                    />
                  </Segment>
                  <Segment>
                    <Dropdown
                      fluid
                      selection
                      search
                      options={ingredients}
                      defaultValue={"name"}
                      multiple selection
                      style={{ marginBottom: "1rem" }}
                      placeholder='Buscar ingredientes'
                    />
                  </Segment>
                </Segment.Group>
                <Segment.Group horizontal>
                  <Segment><Button onClick={handleClickSearch} circular icon="search" /></Segment>
                </Segment.Group>
                {/* <Segment.Group>
                  <Segment>
                  <Dropdown
                      fluid
                      selection
                      options={typeOrder}
                      defaultValue={"name"}
                      style={{ marginBottom: "1rem" }}
                      onChange={handleChangeTypeOrder}
                    />
                    <Button
                      onClick={handleClickChangeOrder}
                      circular
                      icon={order === ORDER_DESC ? "arrow up" : "arrow down"}
                    />
                  </Segment>
                </Segment.Group> */}
              </Segment.Group>
            </Form.Field>
          </Grid.Column>
      </Grid>
    </Form>
  );
};
