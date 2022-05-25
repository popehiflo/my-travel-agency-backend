const Stripe = require('stripe');

const stripe = new Stripe(process.env.STRIPE_API_KEY);

function handlerPayStripe(req, res) {
  stripe.charges.create({
    source: req.body.tokenId,
    amount: req.body.amount,
    currency: "usd",
  },
  (stripeErr, stripeResp) => {
    if (stripeErr) {
      res.status(500).json(stripeErr);
    } else {
      res.json(stripeResp);
    }
  }
  );
}

module.exports = {
  handlerPayStripe,
};