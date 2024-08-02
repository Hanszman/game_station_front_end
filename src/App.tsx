import React from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import Api from './services/Api';
import { io } from 'socket.io-client';
import './App.css';
const socket = io('http://localhost:3001');

function App() {
  useEffect(() => {
    console.log('env:', process.env);
    console.log('API URL:', process.env.REACT_APP_API_URL);
    Api.get('/db').then(res => {
      console.log('res', res);
    });
    socket.on('connect', () => {
      console.log('connected');
    });
    return () => {
      socket.disconnect();
    };
  }, []);
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
