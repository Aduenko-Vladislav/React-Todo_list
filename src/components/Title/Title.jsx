import { StyledTitle, Wrapper } from "./styles";

function Title(props) {
  return (
    <Wrapper>
      <StyledTitle>{props.titleText}</StyledTitle>
    </Wrapper>
  );
}

export default Title;
