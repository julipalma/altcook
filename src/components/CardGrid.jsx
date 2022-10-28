import { useState } from "react";
import { Card, Grid, Image, Header } from "semantic-ui-react";
import { ModalDescriptionRecipe } from "./ModalDescriptionRecipe";
import { VIEW_TYPE_GRID } from "../utils/constants";

export const CardGrid = ({ recipe, viewType }) => {
  const { title, description } = recipe;
  const [openModal, setOpenModal] = useState(false);

  return (
    <Card fluid>
      <Card.Content>
        <Grid>
          <Grid.Column width={6} verticalAlign="middle" textAlign="center">
            <Header as="h3">{title}</Header>
          </Grid.Column>
          <Grid.Column width={10} textAlign="left">
            {viewType === VIEW_TYPE_GRID ? (
              <p>
                {description && description.substring(0, 140)}
                <a onClick={() => setOpenModal(() => true)}>... mas</a>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </Grid.Column>
        </Grid>
      </Card.Content>

      {openModal && (
        <ModalDescriptionRecipe
          open={openModal}
          setOpen={setOpenModal}
          recipe={recipe}
        />
      )}
    </Card>
  );
};
