import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import Games from './components/pages/games/Games';
import User from './components/pages/user/User';
import { api } from './services/Api';
import './App.scss';

// TODO: Create layout for home
// TODO: Create layout for games
// TODO: Create logic for games
// TODO: Create DB with games, users and images
// TODO: Create login logic with cryptography
// TODO: Create layout for user
// TODO: Create layout for chat

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
        <div className='containerDisplay'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/games' element={<Games/>}></Route>
            <Route path='/user' element={<User/>}></Route>
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
