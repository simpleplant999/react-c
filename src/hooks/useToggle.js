import { useState } from "react";

export const useToggle = (initalValue = false) => {
  const [state, setState] = useState(initalValue);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return [state, toggle];
};
