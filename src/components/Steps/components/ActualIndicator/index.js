import React from "react";
import { useSteps } from "../../context/Steps";
import { Bar } from "./styles";

export default function ActualIndicator({ step }) {
  const { currentStep } = useSteps();
  return <Bar checked={currentStep >= step} />;
}
