import React from "react";
import { useState } from "react";

import {
  ToDoWrapper,
  ToDoInput,
  InputItem,
  Label,
  Input,
  AddButton,
  ToDoArea,
  ToDoButton,
  ToDoList,
  Item,
  ItemTitle,
  ItemDescription,
  Icons,
  StyledAiOutlineDelete,
  StyledBsCheckLg,
} from "./styles";

function Todo() {
  const [isActive, setIsActive] = useState(false);

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
        <ToDoButton
          className={isActive === false && "active"}
          onClick={() => setIsActive(false)}
        >
          Need to do
        </ToDoButton>
        <ToDoButton
          className={isActive === true && "active"}
          onClick={() => setIsActive(true)}
        >
          Completed
        </ToDoButton>
      </ToDoArea>

      <ToDoList>
        <Item>
          <ItemTitle>Task1</ItemTitle>
          <ItemDescription>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Expedita ipsa voluptatibus voluptatum?
          </ItemDescription>
        </Item>
        <Icons>
          <StyledAiOutlineDelete />
          <StyledBsCheckLg />
        </Icons>
      </ToDoList>
    </ToDoWrapper>
  );
}

export default Todo;
