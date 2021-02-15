var mongoose = require('mongoose');

var schema = mongoose.Schema;

var userVerificationSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true
    },
    mail_id: {
        type: String,
        required: true
    },
    organistaion_name: {
        type: String,
        required: true
    },
    organistation_contact: {
        type: Number,
        required: true
    },
    organisation_maid_id: {
        type: String,
        required: true
    }
});

var UserVerification = mongoose.model('userVerification', userVerificationSchema);

module.exports = UserVerification;