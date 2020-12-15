import React from "react";
import MultiStepContainer from "../../components/Steps";

// import { FormProvider } from "../../contexts/form";

import UserData from "../forms/UserData";

function UserRegister() {
  return (
    // <FormProvider>
    <MultiStepContainer
      onFinish={() => {
        alert("acabou!");
      }}
    >
      <UserData />
      <UserData />
    </MultiStepContainer>
    // </FormProvider>
  );
}

export default UserRegister;
