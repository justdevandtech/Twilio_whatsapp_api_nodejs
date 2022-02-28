require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

const post = async (req, res) => {
  const body = req.body;

  try {
    await client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        body: body.message,
        to: "whatsapp:" + body.phone,
      })
      .then(message => console.log(message.sid));
    res.send("Message sent successfully");
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

module.exports = post;