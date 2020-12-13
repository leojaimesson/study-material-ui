import { useState, useEffect } from "react";

function useLocalStorage(key, initial) {
  const [state, setState] = useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? local : initial;
  });

  useEffect(() => {
    if (key && state) {
      window.localStorage.setItem(key, state);
    }
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;
