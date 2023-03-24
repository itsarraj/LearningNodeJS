const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
});

//  'Contact' will be name in the database & that 'Contact'  or Collection will be defined in the schema contactSchema

Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
