import React, { useState } from 'react';
import './LoginBox.css';

const LoginBox = ({ onLogin, onSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        onLogin(email, password);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        onSignup(email, password);
    };

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="login-box">
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
            {isLogin ? (
                <form>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="buttons">
                        <button className="login-button" onClick={handleLogin}>
                            Login
                        </button>
                        <button className="toggle-button" onClick={toggleForm}>
                            Sign Up
                        </button>
                    </div>
                </form>
            ) : (
                <form>
                    <label>Email:</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="buttons">
                        <button className="signup-button" onClick={handleSignup}>
                            Sign Up
                        </button>
                        <button className="toggle-button" onClick={toggleForm}>
                            Login
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoginBox;



