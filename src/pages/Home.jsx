import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import { useFetch } from "../hooks/useFetch";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const Home = () => {
  const { data, api } = useFetch();

  useEffect(() => {
    api(BASE_URL);
  }, []);

  return (
    <>
      <Header />
      <h1>Home</h1>
      <hr />
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </>
  );
};

export default Home;
