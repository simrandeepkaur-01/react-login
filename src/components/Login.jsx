import { useState } from "react";
import Tabs from "./Tabs";
import Home from "./Home";

function LoginForm({ isLoggedIn, setIsLoggedIn, setActivePage }) {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');

    function validateName(e) {
        setName(e.target.value);

        if (e.target.value.length < 3) {
            return setNameError('Name should be atleast 3 digit long.');
        }
        setNameError(null);
    }

    function validatePassword(e) {
        setPassword(e.target.value);

        if (e.target.value.length < 8) {
            return setPasswordError('Password should be atleast 8 digit long.');
        }
        setPasswordError(null)
    }

    function validateForm(e) {
        e.preventDefault();

        if (!name || !password || nameError || passwordError) {
            alert('Please Enter your details.');
            setIsLoggedIn(false);
        } else {
            alert('login');
            setIsLoggedIn(true);
            setActivePage('home')
        }
    }

    return (
        <>
            <section className="w-screen  flex items-center justify-center mt-52">

                <form onSubmit={validateForm} className="space-y-4 p-8 shadow-md shadow-gray-300 rounded-lg w-80 text-center bg-white">
                    <h1 className="text-2xl w-full">LogIn Form</h1>

                    <div className="w-full">
                        <input onChange={validateName} type="text" placeholder="Enter your name" className="border border-black rounded-md p-1 w-full" />
                        {nameError ? <span className="text-sm text-red-600">{nameError}</span> : ''}
                    </div>

                    <div className="w-full">
                        <input onChange={validatePassword} type="password" placeholder="Enter Password" className="border border-black rounded-md p-1 w-full" autoComplete="off" />
                        {passwordError ? <span className="text-sm text-red-600">{passwordError}</span> : ''}
                    </div>

                    <button type="submit" className="rounded-md p-1 px-3 bg-blue-700 text-white w-full">Submit</button>
                </form>

            </section>
        </>
    )
}

export default LoginForm;