const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const User= require('./models/ReactDataSchema')

app.use(express.json());
app.use(cors());

//jo bi mongohost
mongoose.connect('mongodb://localhost:27017/reactdata', { useNewUrlParser: true });

app.post('/api/children', async(req, res) => {
    const formState = req.body.formState
    const formDistrictHome = req.body.formDistrictHome
    const formShelterHome = req.body.formShelterHome
    const formDateofCreation = req.body.formDateofCreation
    const formChildName = req.body.formChildName
    const formCaseNumber = req.body.formCaseNumber
    const formGender = req.body.formGender
    const formDateofAdmission = req.body.formDateofAdmission
    const formReasonForAdmission = req.body.formReasonForAdmission
    const formCaseHistory = req.body.formCaseHistory
    const formFamilyVisits = req.body.formFamilyVisits
    const formLengthofStay = req.body.formLengthofStay

    const formData = new User({
        state: formState,
        districtHome: formDistrictHome,
        shelterHome: formShelterHome,
        dateofCreation: formDateofCreation,
        childName: formChildName,
        caseNumber: formCaseNumber,
        gender: formGender,
        dateofAdmission: formDateofAdmission,
        reasonForAdmission: formReasonForAdmission,
        caseHistory: formCaseHistory,
        familyVisits: formFamilyVisits,
        lengthofStay: formLengthofStay,

    })

    try {
        await formData.save();
        res.send("Inserted data")
    } catch(err) {
        console.log(err)
    }
});
//3000 is default
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server started for ${port}`);
});