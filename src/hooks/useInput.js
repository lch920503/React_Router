import { useState } from "react";

export const useInput = (initValue) => {
  const [id, setId] = useState(initValue);
  const [password, setPassword] = useState(initValue);

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };

  return [id, password, onChangeId, onChangePw];
};
