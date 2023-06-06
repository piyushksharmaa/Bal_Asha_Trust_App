import React, { useState, useRef, useEffect } from 'react';
import './ParentComponent.css';


const ParentComponent = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [showLogin, setShowLogin] = useState(false);
    const [showNewUserForm, setShowNewUserForm] = useState(false);

    const dropdownRef = useRef(null);
    const loginBoxRef = useRef(null);
    const newUserBoxRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                event.target.className !== 'login-button'
            ) {
                setShowOptions(false);
                setShowLogin(false);
                setShowNewUserForm(false);
            }

            if (
                loginBoxRef.current &&
                !loginBoxRef.current.contains(event.target) &&
                event.target.className !== 'login-button'
            ) {
                setShowLogin(false);
            }

            if (
                newUserBoxRef.current &&
                !newUserBoxRef.current.contains(event.target) &&
                event.target.className !== 'login-button'
            ) {
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
        setShowLogin(false);
        setShowNewUserForm(false);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
        setShowLogin(option === "Company's Login");
        setShowNewUserForm(option === 'New User');
    };

    const handleAdminSubmit = (data) => {
        console.log('Admin Login Data:', data);
    };

    const handleNewUserSubmit = (data) => {
        console.log('New User Data:', data);
    };

    return (
        <div className="parent-container">
            <button className="login-button" onClick={handleButtonClick}>
                Login or Sign up
            </button>
            {showOptions && (
                <div className="dropdown-container" ref={dropdownRef}>
                    <select
                        id="optionSelect"
                        value={selectedOption}
                        onChange={(e) => handleOptionSelect(e.target.value)}
                    >
                        <option value="">Select an option</option>
                        <option value="Company's Login">Company's Login</option>
                        <option value="New User">New User</option>
                    </select>
                </div>
            )}
            {showNewUserForm && (
                <div className="new-user-form" ref={newUserBoxRef}>
                    <h2>Join Our Helping Hands</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const data = Object.fromEntries(formData.entries());
                            handleNewUserSubmit(data);
                        }}
                    >
                        <label htmlFor="contactNumber">Contact Number:</label>
                        <input type="text" id="contactNumber" name="contactNumber" required />
                        <label htmlFor="newUserEmail">Email:</label>
                        <input type="email" id="newUserEmail" name="newUserEmail" required />
                        <label htmlFor="newUserPassword">Password:</label>
                        <input
                            type="password"
                            id="newUserPassword"
                            name="newUserPassword"
                            required
                        />
                        <label htmlFor="adminSelection">Select Admin:</label>
                        <select id="adminSelection" name="adminSelection" required>
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
            {showLogin && (
                <div className="new-user-form" ref={loginBoxRef}>
                    <h2>{selectedOption} Login</h2>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            const data = Object.fromEntries(formData.entries());
                            handleAdminSubmit(data);
                        }}
                    >
                        <label htmlFor="loginEmail">Email:</label>
                        <input type="email" id="loginEmail" name="loginEmail" required />
                        <label htmlFor="loginPassword">Password:</label>
                        <input type="password" id="loginPassword" name="loginPassword" required />
                        <label htmlFor="loginAdmin">Select Admin:</label>
                        <select id="loginAdmin" name="loginAdmin" required>
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
export default ParentComponent; 