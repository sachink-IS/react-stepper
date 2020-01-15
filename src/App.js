import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Stepper from './Components/Stepper/Stepper';
import TestComponentOne from './TestComponentOne/TestComponentOne';
import TestComponentTwo from './TestComponentTwo/TestComponentTwo';
import TestComponentThree from './TestComponentThree/TestComponentThree';
import TestComponentFour from './TestComponentFour/TestComponentFour';
import TestComponentFive from './Components/TestComponentFive';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sachin Khedkar</h1>
        <Stepper pages={[TestComponentOne, TestComponentTwo, TestComponentThree, TestComponentFour, TestComponentFive]} />
      </header>
    </div>
  );
}

export default App;
