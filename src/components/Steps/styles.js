import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  overflow: hidden;
`;

export const StepsContainer = styled(Container)`
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
`;

export const ActualsIndicatorsContainer = styled(Container)`
  flex-direction: row;
  max-width: 1280px;
  margin: 0 auto;
`;
