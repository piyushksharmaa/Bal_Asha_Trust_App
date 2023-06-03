import React, { useState } from 'react';
import LoginBox from './LoginBox';
import './ParentComponent.css';

const ParentComponent = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        setShowLoginForm(true);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        console.log('Login:', email, password);
    };

    return (
        <div>

            {!showLoginForm ? (
                <button className="login-button" onClick={handleLoginClick}>
                    Login or Sign up
                </button>
            ) : (
                <LoginBox
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    onLogin={handleLogin}
                />
            )}
        </div>
    );
};

export default ParentComponent;
