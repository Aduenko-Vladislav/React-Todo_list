import React from "react";
import styled from "styled-components";
import Title from "./components/Title/Title.jsx";
import Todo from "./components/Todo/Todo.jsx";

const StyledApp = styled.div`
  margin: 55px auto 0;
  max-width: 1170px;
  width: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Title titleText="My ToDo List"></Title>
      <Todo/>
    </StyledApp>
  );
}

export default App;
