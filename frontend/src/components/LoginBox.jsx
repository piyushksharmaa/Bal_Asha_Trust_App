import React, { useState } from 'react';

const LoginBox = ({ onSubmit, showAdminSelect }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password, admin });
        setEmail('');
        setPassword('');
        setAdmin('');
    };

    return (
        <div className="overlay">
            <div className="login-box">
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {showAdminSelect && (
                        <>
                            <label htmlFor="admin">Select Admin:</label>
                            <select
                                id="admin"
                                value={admin}
                                onChange={(e) => setAdmin(e.target.value)}
                            >
                                <option value="">Select Admin</option>
                                <option value="Admin 1">Admin 1</option>
                                <option value="Admin 2">Admin 2</option>
                                <option value="Admin 3">Admin 3</option>
                                <option value="Admin 4">Admin 4</option>
                                <option value="Admin 5">Admin 5</option>
                            </select>
                        </>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginBox;
