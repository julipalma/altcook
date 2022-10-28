import React from "react";
import { Button, Message, Modal } from "semantic-ui-react";

export const ModalSearchRecipe = ({
  recipeToView,
  handleClickSearch,
  openModal,
}) => {
  return (
      <>
        { recipeToView ?
          <Modal centered={false} open={openModal}>
            <Modal.Header>{recipeToView.title}</Modal.Header>
            <Modal.Content>
              <Modal.Description>{recipeToView.description}</Modal.Description>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={handleClickSearch}>OK</Button>
            </Modal.Actions>
          </Modal>
          : 
          <Modal centered={false} open={openModal}>
            <Modal.Header>Error</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                <Message negative>
                  <Message.Header>
                    Lo sentimos no encontramos la receta solicitada.
                  </Message.Header>
                  <p>Por favor modifique su búsqueda.</p>
                </Message>
              </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={handleClickSearch}>OK</Button>
          </Modal.Actions>
          </Modal>
        }
      </>
  );
};
