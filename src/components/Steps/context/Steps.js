import React, { createContext, useContext, useState } from "react";

const StepsContext = createContext();

export default function StepsProvider({ children, numberOfSteps = 0 }) {
  const [store, setStore] = useState({
    currentStep: 0,
    currentAnimation: ""
  });
  function increment() {
    if (store.currentStep < numberOfSteps - 1) {
      setStore({
        currentStep: store.currentStep + 1
      });
    }
  }
  function decrement() {
    if (store.currentStep > 0) {
      setStore({
        currentStep: store.currentStep - 1
      });
    }
  }
  return (
    <StepsContext.Provider
      value={{
        increment,
        decrement,
        currentStep: store.currentStep,
        numberOfSteps
      }}
    >
      {children}
    </StepsContext.Provider>
  );
}

export function useSteps() {
  const context = useContext(StepsContext);
  return context;
}
