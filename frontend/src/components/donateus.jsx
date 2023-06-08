import React, { useState } from "react";
import "./DonationForm.css";

const DonationForm = () => {
    const [inputArea, setInputArea] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [personName, setPersonName] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
        console.log({
            inputArea,
            companyName,
            personName,
            contactNumber,
            selectedType
        });
        
        setInputArea("");
        setCompanyName("");
        setPersonName("");
        setContactNumber("");
        setSelectedType("");
    };

    return (
        <div className="donation-form-container">
            <h2 className="donation-form-heading">Donation</h2>
            <form className="donation-form" onSubmit={handleFormSubmit}>
                <div className="donation-form-group">
                    <label htmlFor="inputArea" className="donation-form-label">
                        Input Area:
                    </label>
                    <textarea
                        id="inputArea"
                        className="donation-form-textarea"
                        value={inputArea}
                        onChange={(e) => setInputArea(e.target.value)}
                    ></textarea>
                </div>

                <div className="donation-form-group">
                    <label htmlFor="companyName" className="donation-form-label">
                        Company Name:
                    </label>
                    <input
                        type="text"
                        id="companyName"
                        className="donation-form-input"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                </div>

                <div className="donation-form-group">
                    <label htmlFor="personName" className="donation-form-label">
                        Person's Name:
                    </label>
                    <input
                        type="text"
                        id="personName"
                        className="donation-form-input"
                        value={personName}
                        onChange={(e) => setPersonName(e.target.value)}
                    />
                </div>

                <div className="donation-form-group">
                    <label htmlFor="contactNumber" className="donation-form-label">
                        Contact Number:
                    </label>
                    <input
                        type="tel"
                        id="contactNumber"
                        className="donation-form-input"
                        value={contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)}
                    />
                </div>

                <div className="donation-form-group">
                    <label htmlFor="selectedType" className="donation-form-label">
                        Type of Goods:
                    </label>
                    <select
                        id="selectedType"
                        className="donation-form-select"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        <option value="">Select Type</option>
                        <option value="clothes">Clothes</option>
                        <option value="food">Food</option>
                        <option value="toys">Toys</option>
                        
                    </select>
                </div>

                <button type="submit" className="donation-form-button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default DonationForm;
