import React, { useState, useEffect } from 'react';
import './App.css';
import { InputContainer } from '../Containers/InputContainer.jsx';
import { OutputContainer } from '../Containers/OutputContainer.jsx';

function App() {
  const [bill, setBill] = useState(null);
  const [tipButton, setTipButton] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [person, setPerson] = useState(1);
  const [tipTotal, setTipTotal] = useState(0);
  const [tipAverage, setTipAverage] = useState(null);

  const handleReset = (event) => {
    setBill(prevBill => prevBill = 0);
    setTipButton(null);
    setTipPercentage(prevPercent => prevPercent = 0);
    setPerson(prevPerson => prevPerson = 1);
    setTipTotal(prevAmount => prevAmount = 0);
  };

  useEffect(() => {
    console.log(typeof bill);
  }, [bill]);

  return (
    <div className="App">
      <div className="logo">
        <h1>spli</h1>
        <h1>tter</h1>
      </div>
      <main>
        <InputContainer
          tipButton={tipButton}
          setTipButton={setTipButton}
          setBill={setBill}
          className="container--input"
        />
        <OutputContainer
          tipTotal={tipTotal}
          tipAverage={tipAverage}
          onResetClick={handleReset}
          className="container--output"
        />
      </main>
    </div>
  );
}

export default App;
