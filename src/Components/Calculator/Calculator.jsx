import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const PASSWORD = "1"; // define your password here

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    if (input === PASSWORD) {
      navigate('/login'); // navigate to the next page
    } else {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{input}</div>
        <button className="button clear" onClick={handleClear}>C</button>
        <button className="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button className="button" onClick={() => handleClick('%')}>%</button>
        <button className="button" onClick={() => handleClick('/')}>/</button>
        <button className="button" onClick={() => handleClick('7')}>7</button>
        <button className="button" onClick={() => handleClick('8')}>8</button>
        <button className="button" onClick={() => handleClick('9')}>9</button>
        <button className="button" onClick={() => handleClick('*')}>X</button>
        <button className="button" onClick={() => handleClick('4')}>4</button>
        <button className="button" onClick={() => handleClick('5')}>5</button>
        <button className="button" onClick={() => handleClick('6')}>6</button>
        <button className="button" onClick={() => handleClick('-')}>-</button>
        <button className="button" onClick={() => handleClick('1')}>1</button>
        <button className="button" onClick={() => handleClick('2')}>2</button>
        <button className="button" onClick={() => handleClick('3')}>3</button>
        <button className="button" onClick={() => handleClick('+')}>+</button>
        <button className="button zero" onClick={() => handleClick('0')}>0</button>
        <button className="button equal" onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
