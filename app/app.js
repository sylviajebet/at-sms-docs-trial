const Africastalking = require("africastalking");

const credentials = {
  apiKey: "your_api_key_here",
  username: "sandbox",
};

const africastalking = Africastalking(credentials);
const sms = africastalking.SMS;

sms.send({
  to: ["+254712345678", "+254798765432"],
  message: "Thank you for attending our event! We appreciate your presence.",
})
  .then(console.log)
  .catch(console.error);
