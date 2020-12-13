import React from "react";
import StepsProvider from "./context/Steps";
import Step from "./components/Step";
import ActualIndicator from "./components/ActualIndicator";
import { ActualsIndicatorsContainer, StepsContainer } from "./styles";

export default function MultStepContainer({ children = [], onFinish }) {
  return (
    <StepsProvider numberOfSteps={children.length}>
      <ActualsIndicatorsContainer>
        {children.map(function (_, index) {
          return (
            <ActualIndicator
              step={index}
              key={`actual-${index}-${Date.now()}`}
            />
          );
        })}
      </ActualsIndicatorsContainer>
      <StepsContainer>
        {children.map(function (child, index) {
          return (
            <Step
              content={child}
              step={index}
              onFinish={onFinish}
              key={`step-${index}`}
            />
          );
        })}
      </StepsContainer>
    </StepsProvider>
  );
}
