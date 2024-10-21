const mongoose = require('mongoose');

// Define schema for form data
const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    comment: { type: String, required: true },
});

const Newdata = mongoose.model('Newdata', formSchema);

module.exports = Newdata;
