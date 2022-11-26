import React from "react";
import data from "./Data.json";
const Getdat = () => {
  return (
    <div>
      <h1>This Data Get From local Json File </h1>
      {data &&
        data.map((item) => {
          return (
            <div>
              <h2> {item.title}</h2>
              <p>{item.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Getdat;
