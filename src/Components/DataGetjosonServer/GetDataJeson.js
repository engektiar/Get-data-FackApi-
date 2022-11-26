import React, { useState, useEffect } from "react";

const GetDataJeson = () => {
  const [user, setuser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setuser(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>Get data Fack api Thaka </h1>
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
