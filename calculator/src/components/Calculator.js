import { useState } from "react";
import { Display } from "./Display";
import { Button } from "./Button";

export const Calculator = () => {
  const [expression, setExpression] = useState("");
  const BUTTONS_DATA = [
    'Clear', '/', '*', '←',
    '7', '8', '9', '-',
    '4', '5', '6', '+',
    '1', '2', '3', '.',
    '(', '0', ')', '='
  ];

  const handleClick = (buttonText) => {
    setExpression((prevExpression) => {
      let newExpression = prevExpression;

      if (buttonText === "Clear") {
        newExpression = "";
      } else if (buttonText === "=") {
        const VALID_CHARS = /^[\d+\-*/().]+$/;

        if (VALID_CHARS.test(newExpression)) {
          try {
            newExpression = String(eval(newExpression));
          } catch (e) {
            newExpression = "Error";
          }
        }
      } else if (buttonText === "←") {
        newExpression = newExpression.slice(0, -1);
      } else {
        newExpression += buttonText;
      }

      return newExpression;
    });
  };

  return (
    <>
      <Display expression={expression} />
      <div className="buttons">
        {BUTTONS_DATA.map((buttonText, index) => (
          <Button key={index} buttonText={buttonText} handleClick={() => handleClick(buttonText)} />
        ))}
      </div>
    </>
  );
};

export default Calculator;
