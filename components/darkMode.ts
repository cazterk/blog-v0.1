import styled from "styled-components";

const Div = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fontColor};
`;

Div.defaultProps = {
  theme: {
    bg: "white",
    fontColor: "black",
  },
};

export default Div;
