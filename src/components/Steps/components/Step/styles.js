import styled from "styled-components";
export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  animation-duration: 600ms;
`;

export const Button = styled.button`
  padding: 10px;
  border: 1px solid transparent;
  background: none;
  font-weight: bolder;
  text-transform: uppercase;
  border-radius: 3px;
  min-width: 100px;
  box-sizing: border-box;
`;

export const NextButton = styled(Button)`
  background: #8257e6;
  color: #fff;
`;

export const PreviousButton = styled(Button)`
  color: #373a3c;
  border: 1px solid #cccccc;
`;

export const BottomButtonContainer = styled.div`
  padding-top: 20px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: ${({ step }) => (step === 0 ? "flex-end" : "space-between")};
`;
