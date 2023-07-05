/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import classes from './UserInput.module.css';

const UserInput = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState({
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    duration: 10,
  });

  const submitHandler = (event) => {
    event.preventDefault();
    onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput({
      'current-savings': 10000,
      'yearly-contribution': 1200,
      'expected-return': 7,
      duration: 10,
    });
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return { ...prevState, [input]: +value };
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput['current-savings']}
            onChange={() =>
              inputChangeHandler('current-savings', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput['yearly-contribution']}
            onChange={() =>
              inputChangeHandler('yearly-contribution', event.target.value)
            }
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput['expected-return']}
            onChange={() =>
              inputChangeHandler('expected-return', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            onChange={() => inputChangeHandler('duration', event.target.value)}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
