import React, { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children, initialState = {} }) {
  const [store, setStore] = useState(initialState);

  function getField(key, defaultValue) {
    return store[key] || defaultValue;
  }

  function setField(key, value) {
    setStore({ ...store, [key]: value });
  }

  function getStore() {
    return store;
  }

  return (
    <FormContext.Provider
      value={{
        setField,
        getField,
        getStore,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
