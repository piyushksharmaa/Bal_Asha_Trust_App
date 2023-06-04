import React, { useState } from 'react';
import './LoginBox.css'
const LoginBox = ({ onOptionSelect }) => {
    const [showNewUserBox, setShowNewUserBox] = useState(false);
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedAdmin, setSelectedAdmin] = useState('');

    const handleOptionClick = (option) => {
        if (option === 'New User') {
            setShowNewUserBox(true);
        } else {
            onOptionSelect(option);
        }
    };

    const handleNewUserSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary action with the new user data
        const userData = {
            contactNumber,
            email,
            password,
            admin: selectedAdmin
        };
        console.log('New User Data:', userData);
        // Reset the form fields
        setContactNumber('');
        setEmail('');
        setPassword('');
        setSelectedAdmin('');
    };

    return (
        <div className="login-box">
            <h2>Login or Signup</h2>
            {!showNewUserBox ? (
                <div className="options-container">
                    <button className="admin-button" onClick={() => handleOptionClick('Admin 1')}>
                        Admin 1
                    </button>
                    <button className="admin-button" onClick={() => handleOptionClick('Admin 2')}>
                        Admin 2
                    </button>
                    <button className="admin-button" onClick={() => handleOptionClick('Admin 3')}>
                        Admin 3
                    </button>
                    <button className="admin-button" onClick={() => handleOptionClick('Admin 4')}>
                        Admin 4
                    </button>
                    <button className="admin-button" onClick={() => handleOptionClick('Admin 5')}>
                        Admin 5
                    </button>
                    <button className="new-user-button" onClick={() => handleOptionClick('New User')}>
                        New User
                    </button>
                </div>
            ) : (
                <div className="new-user-box">
                    <h2>Join Our Helping Hands</h2>
                    <form onSubmit={handleNewUserSubmit}>
                        <label>Contact Number:</label>
                        <input
                            type="text"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                        />
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
                        <label>Admin:</label>
                        <select value={selectedAdmin} onChange={(e) => setSelectedAdmin(e.target.value)}>
                            <option value="">Select Admin</option>
                            <option value="Admin 1">Admin 1</option>
                            <option value="Admin 2">Admin 2</option>
                            <option value="Admin 3">Admin 3</option>
                            <option value="Admin 4">Admin 4</option>
                            <option value="Admin 5">Admin 5</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginBox;