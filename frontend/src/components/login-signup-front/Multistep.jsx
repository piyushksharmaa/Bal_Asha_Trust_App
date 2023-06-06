import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const AddChildrenDataPage = () => {
    const [formData, setFormData] = useState({
        state: "",
        district: "",
        shelterHome: "",
        dateOfCreation: "",
        childName: "",
        caseNumber: "",
        gender: "",
        dateOfAdmission: "",
        reasonForAdmission: "",
        caseHistory: "",
        familyVisits: "",
        lengthOfStay: "",
    });

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/children", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Form data submitted successfully!");
            } else {
                alert("Error submitting form data.");
            }
        } catch (error) {
            console.log("Error:", error);
            alert("Error submitting form data.");
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Add Children Data
            </Typography>

            <form onSubmit={handleSubmit}>
                <Typography variant="h6" gutterBottom>
                    Orphanage Details
                </Typography>

                <TextField
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="District"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Name of Shelter Home"
                    name="shelterHome"
                    value={formData.shelterHome}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Date of Creation"
                    name="dateOfCreation"
                    value={formData.dateOfCreation}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <Typography variant="h6" gutterBottom>
                    Child Details
                </Typography>

                <TextField
                    label="Name"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Case Number"
                    name="caseNumber"
                    value={formData.caseNumber}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <Typography variant="h6" gutterBottom>
                    Case Details
                </Typography>

                <TextField
                    label="Date of Admission"
                    name="dateOfAdmission"
                    value={formData.dateOfAdmission}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Reason for Admission"
                    name="reasonForAdmission"
                    value={formData.reasonForAdmission}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Case History"
                    name="caseHistory"
                    value={formData.caseHistory}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Number of family visits/Phone Calls"
                    name="familyVisits"
                    value={formData.familyVisits}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    label="Length of Stay"
                    name="lengthOfStay"
                    value={formData.lengthOfStay}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />

                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default AddChildrenDataPage;
