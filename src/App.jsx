import { useState } from 'react'
import Tabs from './components/Tabs'
import LoginForm from './components/Login'
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState('home');

  let content;
  if (activePage === 'home') {
    content = <Home />
  } else if (activePage === 'profile' && isLoggedIn) {
    content = < Profile />
  } else if (activePage === 'settings' && isLoggedIn) {
    content = <Settings />
  } else {
    content = <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  }

  return (
    <>
      <div className='w-screen min-h-screen'>
        <Tabs isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setActivePage={setActivePage} />
        {content}
      </div>
    </>
  )
}

export default App