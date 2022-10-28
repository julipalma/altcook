import { Container, Header } from "semantic-ui-react";

const headerStyle = {
  marginTop: "1rem",
};

export const Layout = ( { children } ) => (
  <Container text textAlign="center">
    <Header as="h1" style={headerStyle}>
      Recetas
    </Header>
    {children}
  </Container>
);
