import { useState } from "react";

export const useInput = (initValue) => {
  const [id, setId] = useState(initValue);
  const [password, setPassword] = useState(initValue);
  const [expirationTime, setExpirationTime] = useState(Date.now());

  const onChangeId = (e) => {
    setId(e.target.value);
  };
  const onChangePw = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setId("");
    const signInTime = Date.now();
    sessionStorage.setItem("userId", id);
    sessionStorage.setItem("accessTime", signInTime);
  };

  console.log(new Date(expirationTime));

  return [id, password, onChangeId, onChangePw, onSubmit];
};
