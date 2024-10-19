import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Home from './components/pages/home/Home';
import Games from './components/pages/games/Games';
import User from './components/pages/user/User';
import NotFound from './components/pages/not-found/NotFound';
import { api } from './services/Api';
import './App.scss';

// TODO: Create DB tables for games and images
// TODO: Continue layout for home
// TODO: Continue layout for user
// TODO: Continue layout for games
// TODO: Create layout for each game
// TODO: Create logic for games
// TODO: Create layout for chat

function App() {
  useEffect(() => {
    api.get('/db').then((res: any) => {
      console.log('res', res);
    });
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header/>
          <div className='containerDisplay'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/games' element={<Games/>}></Route>
              <Route path='/user' element={<User/>}></Route>
              <Route path='*' element={<NotFound />}></Route>
            </Routes>
          </div>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
