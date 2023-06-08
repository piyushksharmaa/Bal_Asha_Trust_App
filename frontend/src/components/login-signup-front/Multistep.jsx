import React, { useState } from 'react';
import './multistep.css';
import axios from 'axios';

const AddChildDataPage = () => {
    const [current, setCurrent] = useState(1);

    const nextBtnClick = () => {
        setCurrent(current + 1);
    };

    const prevBtnClick = () => {
        setCurrent(current - 1);
    };

    const submitBtnClick = async () => {
        const form = document.querySelector('form');
        const formData = new FormData(form);

        const data = Object.fromEntries(formData.entries());
        console.log(data); // Do whatever you want with the form data

        try {
            // Make an HTTP POST request to your server endpoint
            const response = await axios.post('/api/submitFormData', data);

            console.log(response.data); // Response from the server

            setCurrent(current + 1);
            setTimeout(() => {
                alert("Your Form Successfully Signed up");
                window.location.reload();
            }, 800);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <header>Add Child Data</header>
            <div className="progress-bar">
                {/* Progress bar code */}
                <div className={`step ${current >= 1 ? 'active' : ''}`}>
                    <p className={current >= 1 ? 'active' : ''}>Orphanage Details</p>
                    <div className={`bullet ${current >= 1 ? 'active' : ''}`}>
                        <span className="check">&#10003;</span>
                    </div>
                </div>
                <div className={`step ${current >= 2 ? 'active' : ''}`}>
                    <p className={current >= 2 ? 'active' : ''}>Child Details</p>
                    <div className={`bullet ${current >= 2 ? 'active' : ''}`}>
                        <span className="check">&#10003;</span>
                    </div>
                </div>
                <div className={`step ${current >= 3 ? 'active' : ''}`}>
                    <p className={current >= 3 ? 'active' : ''}>Case Details</p>
                    <div className={`bullet ${current >= 3 ? 'active' : ''}`}>
                        <span className="check">&#10003;</span>
                    </div>
                </div>
                <div className={`step ${current >= 4 ? 'active' : ''}`}>
                    <p className={current >= 4 ? 'active' : ''}>Submit Details</p>
                    <div className={`bullet ${current >= 4 ? 'active' : ''}`}>
                        <span className="check">&#10003;</span>
                    </div>
                </div>
            </div>
            <div className="form-outer">
                <form>
                    {/* Form pages */}
                    {current === 1 && (
                        <div className="page slide-page">
                            <div className="title">Orphanage Information:</div>
                            <div className="field">
                                <div className="label">State:</div>
                                <input type="text" name="state" />
                            </div>
                            <div className="field">
                                <div className="label">District:</div>
                                <input type="text" name="district" />
                            </div>
                            <div className="field">
                                <div className="label">Name of Shelter Home:</div>
                                <input type="text" name="shelterHomeName" />
                            </div>

                            <div className="field">
                                <button className="next" onClick={nextBtnClick}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {current === 2 && (
                        <div className="page">
                            <div className="title">Child Details</div>
                            <div className="field">
                                <div className="label">First Name:</div>
                                <input type="text" name="firstName" />
                            </div>
                            <div className="field">
                                <div className="label">Date Of Birth:</div>
                                <input type="number" name="dateOfBirth" />
                            </div>
                            <div className="field">
                                <div className="label">Gender:</div>
                                <select name="gender">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="field btns">
                                <button className="prev" onClick={prevBtnClick}>
                                    Previous
                                </button>
                                <button className="next" onClick={nextBtnClick}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {current === 3 && (
                        <div className="page">
                            <div className="title">Case Information</div>
                            <div className="field">
                                <div className="label">Case Number:</div>
                                <input type="text" name="caseNumber" />
                            </div>
                            <div className="field">
                                <div className="label">Date of Creation:</div>
                                <input type="number" name="dateOfCreation" />
                            </div>
                            <div className="field">
                                <div className="label">Length Of Stay (Days):</div>
                                <input type="number" name="lengthOfStay" />
                            </div>
                            <div className="field btns">
                                <button className="prev" onClick={prevBtnClick}>
                                    Previous
                                </button>
                                <button className="next" onClick={nextBtnClick}>
                                    Next
                                </button>
                            </div>
                        </div>
                    )}

                    {current === 4 && (
                        <div className="page">
                            <div className="title">Case Details</div>
                            <div className="field">
                                <div className="label">Reason Of Admission:</div>
                                <input type="text" name="reasonOfAdmission" />
                            </div>
                            <div className="field">
                                <div className="label">Number Of Family Visits/Phone Calls:</div>
                                <input type="number" name="numberOfVisits" />
                            </div>
                            <div className="field">
                                <div className="label">Case History:</div>
                                <input type="text" name="caseHistory" />
                            </div>
                            <div className="field btns">
                                <button className="prev" onClick={prevBtnClick}>
                                    Previous
                                </button>
                                <button className="submit" onClick={submitBtnClick}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default AddChildDataPage;

