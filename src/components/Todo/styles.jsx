import styled from "styled-components";

const ToDoWrapper = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  padding: 25px;
  background: linear-gradient(45deg, #ffb3b3, #ffdab3);
  border-radius: 10px;
`;

const ToDoInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  gap: 25px;
  padding-bottom: 50px;
  border-bottom: 3px solid #f9ba77;
  margin-bottom: 20px;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
`;

const Label = styled.label`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 600;
  background-image: radial-gradient(ellipse, #553c9a, #ee4b2b);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #fa8585;
  border-radius: 5px;
  font-size: 16px;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 10px 15px;

  color: #ffffff;
  background-color: #ff4343;

  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  transition: 0.3s linear;

  &:hover {
    background-color: #e71414;
  }
  &:active {
    background-color: #ff4343;
    box-shadow: 4px 4px 30px #ff4343;
  }
`;

const ToDoArea = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 80px;
`;

const ToDoButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 15px;

  color: #ffffff;
  background-color: #ff4343;

  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  transition: 0.3s linear;

  &:hover {
    background-color: #e71414;
  }
  &:active {
    background-color: #ff4343;
    box-shadow: 4px 4px 30px #ff4343;
  }
`;

const CompleteButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 15px;

  color: #ffffff;
  background-color: #4caf50;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  transition: 0.3s linear;

  &:hover {
    background-color: #028b09;
  }

  &:active {
    box-shadow: 4px 4px 30px #4caf50;
  }
`;

const ToDoList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
 
`;
const Item = styled.div``;

const ItemTitle = styled.h3``;
const ItemDescription = styled.p``;

export {
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
};
