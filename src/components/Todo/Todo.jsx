import React from "react";

import {
  ToDoWrapper,
  ToDoInput,
  InputItem,
  Label,
  Input,
  AddButton,
  ToDoArea,
  ToDoButton,
  CompleteButton,
  ToDoList,
  Item,
  ItemTitle,
  ItemDescription,
} from "./styles";

function Todo() {
  return (
    <ToDoWrapper>
      <ToDoInput>
        <InputItem>
          <Label>Title:</Label>
          <Input type="text" placeholder="What's the task title ?" />
        </InputItem>

        <InputItem>
          <Label>Description:</Label>
          <Input type="text" placeholder="What's the description?" />
        </InputItem>

        <InputItem>
          <AddButton type="button">Add</AddButton>
        </InputItem>
      </ToDoInput>

      <ToDoArea>
        <ToDoButton>Need to do</ToDoButton>
        <CompleteButton>Completed</CompleteButton>
      </ToDoArea>

      <ToDoList>
        <Item>
          <ItemTitle>Task1</ItemTitle>
          <ItemDescription>Lorem ipsum dolor sit amet.</ItemDescription>
        </Item>
        
      </ToDoList>
    </ToDoWrapper>
  );
}

export default Todo;
