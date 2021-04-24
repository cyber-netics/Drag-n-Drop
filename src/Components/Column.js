import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const DroppableCol = styled.div`
  width: 100%;
  background-color: gray;
  padding: 10px 10px 0 10px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
`;

const Column = ({ droppableId, children }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <DroppableCol ref={provided.innerRef} {...provided.droppableProps}>
          {children}
          {provided.placeholder}
        </DroppableCol>
      )}
    </Droppable>
  );
};

export default Column;
