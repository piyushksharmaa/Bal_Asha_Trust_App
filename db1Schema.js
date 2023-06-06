const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const db1Schema = new Schema({

    state: {
        type: String,
        required: true,
    },

    district: {
        type: String,
        required: true,
    },

    shelterHome: {
        type: String,
        required: true,
    },

    dateofCreation: {
        type: Date,
        default: Date.now,
    },

    childName: {
        type: String,
        required: true,
    },

    caseNumber: {
        case_id: mongoose.mongo.ObjectId,
        case_type: String,
        required: true,
        unique: true,
    },

    gender: {
        type: String,
        enum: ["Male", "Female" , "Others"],
        required: true,
    },

    dateofAdmission: {
        type: Date,
        required: true,
    },
  
    reasonForAdmission: {
        type: Array,
    },

    caseHistory: {
        type: Array,
    },

    familyVisits: {
        type: Number,
        required: true,
    },

    lengthOfStay: {
        type: Number,
        required: true,
    },
 
});

const form1 = mongoose.model("Form", db1Schema);
module.exports = form1;
