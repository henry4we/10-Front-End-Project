import React, { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const undo = () => {
    setCount(0);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="numbers">{count}</h1>
      </div>

      <section className="btns-container">
        <button onClick={increase} className="myBtn">
          Plus
        </button>

        <button onClick={undo} className="myBtn">
          Reset
        </button>

        <button onClick={decrease} className="myBtn">
          Minus
        </button>
      </section>
    </>
  );
};

export default Counter;
