import React, { useState, useEffect } from "react";

const GetDataJeson = () => {
  const [user, setuser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const getalluser = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setuser(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getalluser();
  }, []);
  return (
    <div>
      <h1>Get data Fack api Thaka </h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {user &&
        user.map((item) => {
          const { id, title } = item;
          return (
            <div key={id}>
              <p>{title}</p>
            </div>
          );
        })}
    </div>
  );
};

export default GetDataJeson;
