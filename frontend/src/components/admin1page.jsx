import React, { useState } from 'react';
import './AddChildrenDataPage.css';

const AddChildrenDataPage = () => {
    const [orphanageName, setOrphanageName] = useState('');
    const [childrenName, setChildrenName] = useState('');
    const [orphanageContactNo, setOrphanageContactNo] = useState('');
    const [dateOfSubmission, setDateOfSubmission] = useState('');
    const [dateOfAdmission, setDateOfAdmission] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform any necessary actions with the form data
        const formData = {
            orphanageName,
            childrenName,
            orphanageContactNo,
            dateOfSubmission,
            dateOfAdmission,
        };
        console.log('Form Data:', formData);

        // Reset the form fields
        setOrphanageName('');
        setChildrenName('');
        setOrphanageContactNo('');
        setDateOfSubmission('');
        setDateOfAdmission('');
    };

    return (
        <div className="add-children-data-page">
            <h1 className="page-heading">Add New Children Data</h1>
            <form className="data-form" onSubmit={handleSubmit}>
                <label htmlFor="orphanageName" className="form-label">Orphanage Name:</label>
                <input
                    type="text"
                    id="orphanageName"
                    className="form-input"
                    value={orphanageName}
                    onChange={(e) => setOrphanageName(e.target.value)}
                />

                <label htmlFor="childrenName" className="form-label">Children Name:</label>
                <input
                    type="text"
                    id="childrenName"
                    className="form-input"
                    value={childrenName}
                    onChange={(e) => setChildrenName(e.target.value)}
                />

                <label htmlFor="orphanageContactNo" className="form-label">Orphanage Contact No.:</label>
                <input
                    type="text"
                    id="orphanageContactNo"
                    className="form-input"
                    value={orphanageContactNo}
                    onChange={(e) => setOrphanageContactNo(e.target.value)}
                />

                <label htmlFor="dateOfSubmission" className="form-label">Date of Submission:</label>
                <input
                    type="text"
                    id="dateOfSubmission"
                    className="form-input"
                    value={dateOfSubmission}
                    onChange={(e) => setDateOfSubmission(e.target.value)}
                />

                <label htmlFor="dateOfAdmission" className="form-label">Date of Admission:</label>
                <input
                    type="text"
                    id="dateOfAdmission"
                    className="form-input"
                    value={dateOfAdmission}
                    onChange={(e) => setDateOfAdmission(e.target.value)}
                />

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AddChildrenDataPage;
