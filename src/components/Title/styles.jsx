import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 15px;
  margin-bottom: 100px;
`;

const StyledTitle = styled.h1`
  min-height: 75px;
  text-align: center;

  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(45deg, #553c9a, #ee4b2b);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;
export { StyledTitle, Wrapper };
