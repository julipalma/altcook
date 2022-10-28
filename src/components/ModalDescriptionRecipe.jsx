import React from "react";
import { Button, Modal } from "semantic-ui-react";

export const ModalDescriptionRecipe = ({
  recipe,
  open,
  setOpen,
}) => {
  const { name, prediction } = recipe;
  return (
    <Modal centered={false} open={open}>
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content>
        <Modal.Description>{prediction}</Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
};
