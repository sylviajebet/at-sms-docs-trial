const Africastalking = require("africastalking");

const credentials = {
  apiKey: "your_api_key_here",
  username: "sandbox",
};

const africastalking = Africastalking(credentials);
const sms = africastalking.SMS;

sms.send({
  to: ["+254700000000", "+254711111111"],
  message: "Thank you for attending our event! We appreciate your presence.",
  from: "senderID_here"
})
  .then(console.log)
  .catch(console.error);
