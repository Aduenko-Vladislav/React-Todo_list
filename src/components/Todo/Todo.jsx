import { useState, useEffect } from "react";
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
  ToDoList,
  Item,
  ItemTitle,
  ItemDescription,
  Icons,
  StyledAiOutlineDelete,
  StyledBsCheckLg,
  TodoListItem,
  Time,
} from "./styles";

function Todo() {
  const [isActive, setIsActive] = useState(false);
  const [allTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [completedTodos, setCompletedTodos] = useState([]);

  /// Добавляем наше задание в объект и в LocalStorage
  const handleAddToDo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription,
    };

    let updatedTodoArr = [...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
    setNewTitle("");
    setNewDescription("");
  };

  /// удаляем из массива allTodos и из LocalStorage
  const handleDeleteTodo = (index) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem("todolist", JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  /// кнопка Complete и установка времени когда выполненна todo
  const handleComplete = (index) => {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    let completedOn =
      day +
      "-" +
      month +
      "-" +
      year +
      " at " +
      hour +
      ":" +
      minute +
      ":" +
      seconds;

    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);
    setCompletedTodos(reducedTodo);

    localStorage.setItem("completedTodos", JSON.stringify(reducedTodo));
  };

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    let savedCompletedTodo = JSON.parse(localStorage.getItem("completedTodos"));
    if (savedTodo) {
      setTodos(savedTodo);
    }
    if (savedCompletedTodo) {
      setCompletedTodos(savedCompletedTodo);
    }
  }, []);

  return (
    <ToDoWrapper>
      <ToDoInput>
        <InputItem>
          <Label>Title:</Label>
          <Input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="What's the task title ?"
          />
        </InputItem>

        <InputItem>
          <Label>Description:</Label>
          <Input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="What's the description?"
          />
        </InputItem>

        <InputItem>
          <AddButton type="button" onClick={handleAddToDo}>
            Add
          </AddButton>
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
        {isActive === false &&
          allTodos.map((item, index) => {
            return (
              <TodoListItem key={index}>
                <Item>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                </Item>

                <Icons>
                  <StyledAiOutlineDelete
                    onClick={() => handleDeleteTodo(index)}
                    title="Delete?"
                  />
                  <StyledBsCheckLg
                    onClick={() => handleComplete(index)}
                    title="Complete?"
                  />
                </Icons>
              </TodoListItem>
            );
          })}
        {isActive === true &&
          completedTodos.map((item, index) => {
            return (
              <TodoListItem key={index}>
                <Item>
                  <ItemTitle>{item.title}</ItemTitle>
                  <ItemDescription>{item.description}</ItemDescription>
                  <Time>Completed on: {item.completedOn}</Time>
                </Item>

                <Icons>
                  <StyledAiOutlineDelete
                    onClick={() => handleDeleteCompletedTodo(index)}
                    title="Delete?"
                  />
                </Icons>
              </TodoListItem>
            );
          })}
      </ToDoList>
    </ToDoWrapper>
  );
}

export default Todo;
