import { useState } from "react";

export const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  // 30분 -> 1000 * 60 * 30

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, setValue, onChange];
};
