import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 10px;
`;

export const MainTabItem = styled.li<{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "red" : "white")};
`;
