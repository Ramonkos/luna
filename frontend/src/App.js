import React from 'react';
import './App.css';

import {Registration} from "./components/UserAccess/registration";
import {Confirmation} from "./components/UserAccess/confirmation";
import {Verification} from "./components/UserAccess/verification";
import {Login} from "./components/UserAccess/login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Verification></Verification>
      </header>
    </div>
  );
}

export default App;
