const express = require("express");
const Razorpay = require("razorpay");
require("dotenv").config();
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 5173; // Default to 5173 if not specified

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.post("/order", async (req, res) => {
 try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: req.body.amount,
      currency: req.body.currency,
    };
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error creating order");
    }

    res.json(order);
 } catch (error) {
    console.error(error);
    return res.status(500).send("Error");
 }
});

app.post("/order/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_SECRET);
  //order_id + "|" + razorpay_payment_id
  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
  const digest = sha.digest("hex");
  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction is not legit!" });
  }

  res.json({
    msg: "success",
    orderId: razorpay_order_id,
    paymentId: razorpay_payment_id,
  });
});

app.listen(PORT, () => {
    console.log("App is Listening on Port!", PORT);
});
