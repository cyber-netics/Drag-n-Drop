import React from "react";
import styled from "styled-components";

import { Draggable } from "react-beautiful-dnd";

const DraggableItem = styled.div`
  background-color: ${(props) => (props.isDragging ? "red" : "white")};
  padding: 0.5rem;
  border: 1px solid gray;
`;

const Task = ({ el, index }) => {
  return (
    <Draggable index={index} draggableId={el.id}>
      {(provided, snapshot) => (
        <DraggableItem
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {el.name}
        </DraggableItem>
      )}
    </Draggable>
  );
};

export default Task;
