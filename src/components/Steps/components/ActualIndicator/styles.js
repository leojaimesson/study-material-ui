import styled from "styled-components";

export const Bar = styled.div`
  height: 8px;
  flex: 1;
  margin: 0px 5px;
  border-radius: 3px;
  background: ${({ checked }) => (checked ? "#8257e6" : "#ccc")};
`;
