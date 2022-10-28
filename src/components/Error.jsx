import { Message } from "semantic-ui-react";

const Error = () => (
  <Message negative>
    <Message.Header>Error</Message.Header>
    <p>No ha sido posible obtener los signos</p>
  </Message>
);

export default Error;
