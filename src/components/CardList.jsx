import { Card, Grid, Image, Header, GridRow } from "semantic-ui-react";

const cardStyles = {
  border: "5px solid gray",
};

const boldStyle = {
  marginTop: "1.8rem",
};

export const CardList = ({ recipe, list }) => {
  const { title, description } = recipe;
  return (
    <Card
      fluid
      style={!list ? cardStyles : { marginLeft: "0", marginRight: "0" }}
    >
      <Card.Content>
        <Grid>
          <Grid.Column width={!list ? 4 : 2} verticalAlign="middle">
          </Grid.Column>
          <Grid.Column width={!list ? 12 : 14}>
            <Grid.Row textAlign="left">
              <Header as="h2">{title}</Header>
            </Grid.Row>
            <Grid.Row textAlign="left">
              <p>{description}</p>
            </Grid.Row>
            <Grid.Row
              verticalAlign="bottom"
              textAlign="right"
              style={!list ? boldStyle : { marginTop: "1rem" }}
            >
              
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Card.Content>
    </Card>
  );
};
