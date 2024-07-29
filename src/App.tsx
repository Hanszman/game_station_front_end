import React from 'react';
import logo from './logo.svg';
import { io } from 'socket.io-client';
import './App.css';
const socket = io('http://localhost:3001');

function App() {
  socket.on('connect', () => {
    console.log('connected');
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
