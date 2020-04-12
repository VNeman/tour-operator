// paymentController.js
// Import payment model
payment = require('./paymentModel');
// Handle index actions
exports.index = function (req, res) {
    payment.get(function (err, payments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "payments retrieved successfully",
            data: payments
        });
    });
};

// Handle create payment actions
exports.new = function (req, res) {
    var newpayment = new payment({
        appointment: req.body.appointment, 
        user: req.body.user, 
        date: req.body.date, 
        amount: req.body.amount
    });
// save the payment and check for errors
    newpayment.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New payment created!',
            data: payment
        });
    });
};
// Handle view payment info
exports.view = function (req, res) {
    payment.findById(req.params.payment_id, function (err, payment) {
        if (err)
            res.send(err);
        res.json({
            message: 'payment details loading..',
            data: payment
        });
    });
};
// Handle update payment info
exports.update = function (req, res) {
payment.findById(req.params.payment_id, function (err, payment) {
        if (err)
            res.send(err);
payment.appointment = req.body.appointment ? req.body.appointment : payment.appointment;
        payment.user = req.body.user;
        payment.date = req.body.date;
        payment.amount = req.body.amount;
// save the payment and check for errors
        payment.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'payment Info updated',
                data: payment
            });
        });
    });
};
// Handle delete payment
exports.delete = function (req, res) {
    payment.remove({
        _id: req.params.payment_id
    }, function (err, payment) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'payment deleted'
        });
    });
};