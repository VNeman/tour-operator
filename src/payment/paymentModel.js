// paymentModel.js
var mongoose = require('mongoose');
// Setup schema
var paymentSchema = mongoose.Schema({
    appointment: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    user: String,
    amount: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export payment model
var Payment = module.exports = mongoose.model('payment', paymentSchema);
module.exports.get = function (callback, limit) {
    payment.find(callback).limit(limit);
}

