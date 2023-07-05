/* eslint-disable no-unused-vars */
import { useState } from 'react';
import UserInput from './components/UserInput/UserInput';
import ResultsTable from './components/ResultsTable/ResultsTable';
import Header from './components/Header/Header';

function App() {
  const [results, setResults] = useState(null);
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);

    const yearlyData = [];

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setResults(yearlyData);
  };
  return (
    <div>
      <Header />
      <UserInput onCalculate={calculateHandler} />

      {results && (
        <ResultsTable
          data={results}
          initialInvestiment={userInput['current-savings']}
        />
      )}
      {!results && (
        <p style={{ textAlign: 'center' }}>No investment calculated yet.</p>
      )}
    </div>
  );
}

export default App;
