import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Perform login validation and authentication
        // You can handle this logic based on your requirements
        console.log('Email:', email);
        console.log('Password:', password);
        // Reset the form fields
        setEmail('');
        setPassword('');
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;
