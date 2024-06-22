import React, { useState } from "react";
import "../App.css";
import { evaluate } from "mathjs";

const Main = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => {
    // setInputValue(inputValue + value);

    try {
      setInputValue(inputValue + value);
    } catch (error) {
      console.error("Error updating input value:", error);
      setInputValue("error");
    }
  };

  const calculate = () => {
    try {
      const result = evaluate(inputValue);
      setInputValue(result.toString());
    } catch {
      setInputValue("");
    }
  };

  const clear = () => {
    setInputValue("");
  };

  return (
    <form className="calculator" name="calc">
      <input type="text" className="value" value={inputValue} readOnly />
      <span className="num clear" onClick={() => clear()}>
        clear
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span class="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
};

export default Main;
