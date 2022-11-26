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
      {user.map((item) => {
        return (
          <div>
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default GetDataJeson;
