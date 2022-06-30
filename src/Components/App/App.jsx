import React, { useState } from 'react';
import './App.css';
import { MainContainer } from '../Containers/MainContainer.jsx';

function App() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(null);
  const [person, setPerson] = useState(null);

  return (
    <div className="App">
      <div className="logo">
        <h1>spli</h1>
        <h1>tter</h1>
      </div>
      <MainContainer
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={tip}
        person={person}
        setPerson={setPerson}
        className="container"
      />
    </div>
  );
}

export default App;
