const STRIPE_API_KEY = process.env.STRIPE_API_KEY || require('../../config/secrets').STRIPE_API_KEY;
const stripe = require('stripe')(STRIPE_API_KEY);

module.exports.createCharge = (req, res) => {
  var token = req.body.stripeToken;

  var charge = stripe.charges.create({
    amount: 100000,
    description: 'Test charge',
    currency: 'usd',
    source: 'tok_visa',
  }, function(err, charge) {
    if (err) {
      console.log('There is an error processing the charge', err);
    } else {
      console.log('Successfully processed the charge', charge);
    }
  });
};