import { useState } from 'react'
import Tabs from './components/Tabs'
import LoginForm from './components/Login'
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('home');

  return (
    <>
      <div className='w-screen min-h-screen'>
        <Tabs isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setActivePage={setActivePage} />

        {
          activePage === 'home' && <Home /> ||
          activePage === 'profile' && <ProtectedRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
            <Profile />
          </ProtectedRoutes> ||
          activePage === 'settings' && <ProtectedRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
            <Settings />
          </ProtectedRoutes> ||
          activePage === 'login' && <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setActivePage={setActivePage} />
        }

      </div>
    </>
  )
}

export default App 