/* eslint-disable react/display-name */
import React, { useState, useCallback } from "react";

const ExpensiveButton = React.memo(({ onClick, children }) => {
  console.log(`ExpensiveButton rendered: ${children}`);
  return <button onClick={onClick}>{children}</button>;
});

function AdvancedUseCallback() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [darkTheme, setDarkTheme] = useState(false);

  const incrementCount = useCallback(() => {
    setCount(prevCount => prevCount + step);
  }, [step]);

  const decrementCount = useCallback(() => {
    setCount(prevCount => prevCount - step);
  }, [step]);

  const style = {
    backgroundColor: darkTheme ? '#333' : '#fff',
    color: darkTheme ? '#fff' : '#333',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={style}>
      <h2>Count: {count}</h2>
      <div>
        <label htmlFor="step">Step Size: </label>
        <input 
          id="step"
          type="number" 
          value={step} 
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <ExpensiveButton onClick={incrementCount}>
          Increment by {step}
        </ExpensiveButton>
        <ExpensiveButton onClick={decrementCount}>
          Decrement by {step}
        </ExpensiveButton>
      </div>
      <button onClick={() => setDarkTheme(prev => !prev)} style={{ marginTop: '10px' }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default AdvancedUseCallback;