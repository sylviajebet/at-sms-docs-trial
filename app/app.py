import africastalking

username = "sandbox"
api_key = "your_api_key_here"
africastalking.initialize(username, api_key)
sms = africastalking.SMS

recipients = ["+254700000000", "+254711111111"]
message = "Thank you for attending our event! We appreciate your presence."
sender = "senderID_here"

response = sms.send(message, recipients, sender)
print(response)
