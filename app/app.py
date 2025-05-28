import africastalking

username = "sandbox"
api_key = "your_api_key_here"
africastalking.initialize(username, api_key)
sms = africastalking.SMS

recipients = ["+254712345678", "+254798765432"]
message = "Thank you for attending our event! We appreciate your presence."

response = sms.send(message, recipients)
print(response)
