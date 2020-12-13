import React from "react";
import useForm from "../../hooks/useForm";

function ShowFormStore() {
  const { getStore } = useForm();

  return (
    <div>
      <pre>{JSON.stringify(getStore(), null, 2)}</pre>
    </div>
  );
}

export default ShowFormStore;
