import React, { useState } from 'react';
import './App.css';
import { InputContainer } from '../Containers/InputContainer.jsx';
import { OutputContainer } from '../Containers/OutputContainer.jsx';

function App() {
  const [bill, setBill] = useState(null);
  const [tipButton, setTipButton] = useState(null);
  const [tipPercentage, setTipPercentage] = useState(null);
  const [person, setPerson] = useState(1);

  const handleReset = (event) => {
    setBill(prevBill => prevBill = 0);
    setTipButton(null);
    setTipPercentage(prevPercent => prevPercent = 0);
  };

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
          bill={bill}
          setBill={setBill}
          setPerson={setPerson}
          setTipPercentage={setTipPercentage}
          className="container--input"
        />
        <OutputContainer
          bill={bill}
          tipPercentage={tipPercentage}
          person={person}
          onResetClick={handleReset}
          className="container--output"
        />
      </main>
    </div>
  );
}

export default App;
