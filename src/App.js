import React from "react";
// import "./styles.css";
// import "animate.css/animate.min.css";
import MultiStepContainer from "./components/Steps";

import { FormProvider } from "./contexts/form";

import UserRegister from "./containers/forms/UserRegister";

function App() {
  return (
    <div className="App">
      <FormProvider>
        <MultiStepContainer
          onFinish={() => {
            alert("acabou!");
          }}
        >
          <UserRegister />
          <UserRegister />
        </MultiStepContainer>
      </FormProvider>
    </div>
  );
}

export default App;
