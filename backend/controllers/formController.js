const Newdata = require('../models/formModel');
const { sendEmail } = require('../utils/emailService');

// Handle form submission
const submitForm = async (req, res) => {
    const { name, phone, email, comment } = req.body;

    try {
        // Save form data to MongoDB
        const formData = new Newdata({ name, phone, email, comment });
        await formData.save();

        // Send email
        await sendEmail(name, phone, email, comment);

        res.status(200).json({ message: 'Form submitted and email sent!' });
    } catch (error) {
        res.status(500).json({ error: 'Form submission failed' });
    }
};

module.exports = { submitForm };
