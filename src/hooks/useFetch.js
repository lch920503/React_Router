import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState();

  const api = async (url) => {
    await fetch(`${url}/users`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return { data, api };
};
