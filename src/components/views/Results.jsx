import { Card, Container, DropdownProps, Grid } from "semantic-ui-react";
import { CardGrid } from "../CardGrid";
import { CardList } from "../CardList";
import { VIEW_TYPE_GRID, VIEW_TYPE_LIST } from "../../utils/constants";

export const Results = ({
  recipes,
  recipesByType,
  todayRecipe,
  viewType,
  children,
  typeOfDiet, 
  recipeToView
}) => {
  if (recipeToView?.length > 0) {
    recipes = recipeToView;
    todayRecipe = false;
  }
  return (
    <>
    {
      recipesByType?.length > 0 ? (
        <>
          <Container text textAlign='left'> Resultados de {typeOfDiet}</Container>
          <Grid columns={1}>
            <Grid.Row>
              <Card.Group itemsPerRow={1}>
                {recipesByType.map((recipe) => (
                  <CardList key={recipe.id} recipe={recipe} list />
                ))}
              </Card.Group>
            </Grid.Row>
          </Grid>
        </>
      ) : (
      <>
        <Container text> Todos los resultados</Container>
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>{children}</Grid.Column>
          </Grid.Row>
          {todayRecipe && (
            <Grid.Row>
              <Grid.Column>
                <Container text textAlign='left'> Receta destacada</Container>
                <CardList recipe={todayRecipe} />
              </Grid.Column>
            </Grid.Row>
          )}
          
          <Grid.Row>
            <Grid.Column>
              {viewType === VIEW_TYPE_GRID && (
                <Card.Group itemsPerRow={2}>
                  {recipes.map((recipe) => (
                    <CardGrid key={recipe.id} recipe={recipe} viewType={viewType} />
                  ))}
                </Card.Group>
              )}
              {viewType === VIEW_TYPE_LIST && (
                <Card.Group itemsPerRow={1}>
                  {recipes.map((recipe) => (
                    <CardList key={recipe.id} recipe={recipe} list />
                  ))}
                </Card.Group>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
      )
    }
    </>
  );
};
