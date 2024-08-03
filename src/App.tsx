import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import User from './components/User/User';
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
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/game' element={<Game/>}></Route>
            <Route path='/user' element={<User/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
