import React, { useState, useEffect } from "react";
import useFaech from "./useFaech";

const CoustumHook = () => {
  const { data, isLoading, error } = useFaech("https://jsonplaceholder.typicode.com/todos");
  return (
    <div>
      <h1> Coustom Hook Get data </h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {data &&
        data.map((item) => {
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

export default CoustumHook;
