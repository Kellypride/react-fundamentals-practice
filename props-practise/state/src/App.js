import React from 'react';
import './App.css';
import State from './state-counter-practise';

function App() {

  const [Isimportant, setIsimportant] = React.useState('Yes')


  function handleOnClick() {
    setIsimportant("No")

  }
  
  return (
    <div className="state">
      <h1 className='state-title'>Is state important to know?</h1>
      <div className='state-value' onClick={handleOnClick}>
        <h1 > {Isimportant}</h1>
      </div>
      <State />
    </div>
  );
}

export default App;
