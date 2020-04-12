// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});
// Import payment controller
var paymentController = require('./paymentController');
// payment routes
router.route('/payments')
    .get(paymentController.index)
    .post(paymentController.new);
router.route('/payments/:payment_id')
    .get(paymentController.view)
    .patch(paymentController.update)
    .put(paymentController.update)
    .delete(paymentController.delete);
// Export API routes
module.exports = router;