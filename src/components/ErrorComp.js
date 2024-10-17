import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorComp = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPS!!!</h1>
      <h2>Something went wrong</h2>
      <p>{err.status}:{err.statusText}</p>
    </div>
  );
};

export default ErrorComp;
