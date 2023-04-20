import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function getInitialState() {
  console.log("**********");
  return new Date().getDate();
}

const Counter = () => {
  const [counter, setCounter] = useState(() => getInitialState());

  //   console.log(counter);

  function increment() {
    setCounter((prevState) => prevState + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "30px",
        flexDirection: "column",
      }}
    >
      <h2>Counter:{counter}</h2>
      <Button
        onClick={increment}
        style={{ marginBottom: "10px", width: "90px" }}
      >
        +
      </Button>
      <Button
        onClick={decrement}
        className="btn-danger"
        style={{ width: "90px" }}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
