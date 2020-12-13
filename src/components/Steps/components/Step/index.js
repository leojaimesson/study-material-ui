import React from "react";
import {
  Content,
  BottomButtonContainer,
  NextButton,
  PreviousButton
} from "./styles";
import { useSteps } from "../../context/Steps";

export default function Step({ content, step, onFinish }) {
  const { currentStep, numberOfSteps, increment, decrement } = useSteps();
  return (
    currentStep === step && (
      <>
        <Content>{content}</Content>
        <BottomButtonContainer step={currentStep}>
          {currentStep !== 0 && (
            <PreviousButton onClick={decrement}>anterior</PreviousButton>
          )}
          {numberOfSteps - 1 !== step && (
            <NextButton onClick={increment}>próximo</NextButton>
          )}
          {numberOfSteps - 1 === step && (
            <NextButton onClick={onFinish}>finalizar</NextButton>
          )}
        </BottomButtonContainer>
      </>
    )
  );
}
