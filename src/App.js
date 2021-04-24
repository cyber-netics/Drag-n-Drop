import React, { useState } from "react";
import styled from "styled-components";
import _ from "lodash";
import { DragDropContext } from "react-beautiful-dnd";

import Task from "./Components/Task";
import ColumnDroppable from "./Components/Column";
import data from "./data";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Column = styled.div`
  width: 300px;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const App = () => {
  const [state, setState] = useState(data);

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;

    const itemCopy = { ...state[source.droppableId].items[source.index] };

    setState((prev) => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].items.splice(source.index, 1);

      // Adding to new items array location
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );
      return prev;
    });
  };

  return (
    <Container>
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => (
          <Column key={key}>
            <Title>{data.title}</Title>
            <ColumnDroppable droppableId={key}>
              {data.items.map((el, index) => (
                <Task key={el.id} el={el} index={index} />
              ))}
            </ColumnDroppable>
          </Column>
        ))}
      </DragDropContext>
    </Container>
  );
};

export default App;
