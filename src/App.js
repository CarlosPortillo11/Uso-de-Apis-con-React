import React from 'react';
import logo from './logo.svg';
import './App.css';
import PersonList from './components/PersonLists';
import Persons from './components/Persons'

function App() {
  return (
    <div className="App">
      <PersonList/>
      <br/>
      <Persons/>
    </div>
  );
}

export default App;
