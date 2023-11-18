import styled from "styled-components";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

const ToDoWrapper = styled.div`
  max-width: 800px;
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
  margin-bottom: 50px;
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
  font-size: 20px;
  &:focus {
    border: 3px solid #fa8585;
  }
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 10px 15px;

  color: #ffffff;
  background: linear-gradient(45deg, #fb0101, #fb8200);

  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  transition: 0.3s linear;

  &:active {
    box-shadow: 4px 4px 30px #ff4343;
  }
`;

const ToDoArea = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ToDoButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px 15px;

  color: #ffffff;
  background: linear-gradient(45deg, #ff9a9a, #fda84d);

  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  transition: 0.3s linear;
  &.active {
    background: linear-gradient(45deg, #fb0101, #fb8200);
    box-shadow: 4px 4px 30px #ff4343;
  }
`;

const ToDoList = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  padding: 25px;
  padding-right: 10px;

  background: linear-gradient(45deg, #f9d7d7, #fbc68e);
  border-radius: 10px;
`;
const Item = styled.div``;

const ItemTitle = styled.h3`
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: 600;
  color: #fb1e1e;
`;
const ItemDescription = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledAiOutlineDelete = styled(AiOutlineDelete)`
  font-size: 35px;
  color: #be5a5a;
  cursor: pointer;
  &:hover {
    color: #fb1e1e;
  }
`;
const StyledBsCheckLg = styled(BsCheckLg)`
  font-size: 35px;
  cursor: pointer;
  color: #4caf50;
  &:hover {
    color: #028b09;
  }
`;

export {
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
};
