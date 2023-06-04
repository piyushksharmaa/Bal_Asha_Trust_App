import React, { useState, useRef, useEffect } from 'react';
import LoginBox from './LoginBox';
import './ParentComponent.css';
const ParentComponent = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showNewUserForm, setShowNewUserForm] = useState(false);
    const [contactNumber, setContactNumber] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');
    const [selectedAdmin, setSelectedAdmin] = useState('');
    const [Showlogin, SetShowLogin] = useState(false);
    const [LoginEmail, setLoginEmail] = useState('');
    const [LoginPassword, setLoginPassword] = useState('');

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowOptions(false);
                SetShowLogin(false);
                setShowNewUserForm(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleButtonClick = () => {
        setShowOptions(!showOptions);
        setShowNewUserForm(false);
        SetShowLogin(false);
    };

    const handleOptionSelect = (option) => {
        if (option === 'Admin1' || option === 'Admin2' || option === 'Admin3' || option === 'Admin4' || option === 'Admin5') {
            setShowOptions(false);
            SetShowLogin(true);
        }
        else if (option === 'New User') {
            setShowOptions(false);
            setShowNewUserForm(true);
        } else {
            setShowOptions(false);
            setShowNewUserForm(false);
            console.log('Selected Option:', option);

        }
    };
    const handleadminSubmit = (e) => {
        e.preventDefault();
        const loginData = {
            email: LoginEmail,
            password: LoginPassword,
        };
        //data for login
        console.log('LoginData:', loginData);
    };

    const handleNewUserSubmit = (e) => {
        e.preventDefault();
        const userData = {
            contactNumber,
            email: newUserEmail,
            password: newUserPassword,
            admin: selectedAdmin,
        };
        console.log('New User Data:', userData);
        // Perform any necessary action with the new user data
    };

    return (
        <div className="parent-container">
            <button className="login-button" onClick={handleButtonClick}>
                Login or Sign up
            </button>
            {showOptions && (
                <div className="dropdown-container" ref={dropdownRef}>
                    <LoginBox
                        showOptions={showOptions}
                        onOptionSelect={handleOptionSelect}
                        showNewUserForm={showNewUserForm}
                        Showlogin={Showlogin}
                        onLoginSubmit={handleadminSubmit}
                        onNewUserSubmit={handleNewUserSubmit}
                    />
                </div>
            )}
            {showNewUserForm && (
                <div className="new-user-form">
                    <h2>Join Our Helping Hands</h2>
                    <form onSubmit={handleNewUserSubmit}>
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input
                            type="text"
                            id="contactNumber"
                            value={contactNumber}
                            onChange={(e) => setContactNumber(e.target.value)}
                        />
                        <label htmlFor="newUserEmail">Email:</label>
                        <input
                            type="email"
                            id="newUserEmail"
                            value={newUserEmail}
                            onChange={(e) => setNewUserEmail(e.target.value)}
                        />
                        <label htmlFor="newUserPassword">Password:</label>
                        <input
                            type="password"
                            id="newUserPassword"
                            value={newUserPassword}
                            onChange={(e) => setNewUserPassword(e.target.value)}
                        />
                        <label htmlFor="adminSelection">Apply for Admin:</label>
                        <select
                            id="adminSelection"
                            value={selectedAdmin}
                            onChange={(e) => setSelectedAdmin(e.target.value)}
                        >
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
            {Showlogin && (
                <div className="new-user-form">
                    <h2>Admin login</h2>
                    <form onSubmit={handleadminSubmit}>

                        <label htmlFor="LoginEmail">Email:</label>
                        <input
                            type="email"
                            id="LoginEmail"
                            value={LoginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                        <label htmlFor="LoginPassword">Password:</label>
                        <input
                            type="password"
                            id="LoginPassword"
                            value={LoginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                    </form>
                    <button type="submit">Submit</button>
                </div>
            )}
        </div>
    );
};
export default ParentComponent;

