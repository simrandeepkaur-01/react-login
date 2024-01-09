import React, { useState } from 'react';
import LoginForm from './Login';

const Tabs = ({ isLoggedIn, setIsLoggedIn, setActivePage }) => {

    return (
        <nav className="flex gap-4 w-full justify-between p-4 bg-gray-200" >
            <ul className='flex justify-end ml-32 gap-4 w-1/2'>
                <li>
                    <button onClick={() => {
                        setActivePage('home')
                    }}>Home</button>
                </li>
                <li> <button onClick={() => setActivePage('profile')}>Profile</button> </li>
                <li> <button onClick={() => setActivePage('settings')}>Settings</button></li>
            </ul>
            {isLoggedIn ? <button className='mr-10' onClick={() => {
                setIsLoggedIn(false);
                setActivePage('home');
            }}>LogOut</button>
                : <button className='mr-10' onClick={()=> setActivePage('login')}>LogIn</button>
            }
        </nav>
    )
}

export default Tabs;