import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import Game from './components/pages/game/Game';
import Chat from './components/layout/chat/Chat';
import User from './components/pages/user/User';
import { api } from './services/Api';
import './App.css';

// TODO: Create layout for chat
// TODO: Create layout for user
// TODO: Create layout for games
// TODO: Create DB with games, users and images
// TODO: Create login logic with cryptography

function App() {
  useEffect(() => {
    api.get('/db').then((res: any) => {
      console.log('res', res);
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/game' element={<Game/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/chat' element={<Chat/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
