import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home/Home';
import Game from './components/Game/Game';
import Chat from './components/Chat/Chat';
import User from './components/User/User';
import { apiLink, api } from './services/Api';
import './App.css';

function App() {
  useEffect(() => {
    console.log('env:', process.env);
    console.log('API URL:', apiLink);
    api.get('/db').then(res => {
      console.log('res', res);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/game' element={<Game/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/chat' element={<Chat/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
