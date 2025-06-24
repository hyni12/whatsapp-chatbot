const { GoogleGenerativeAI } = require("@google/generative-ai");
const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});


// Create a new client instance
const client = new Client();

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
});

client.on('message_create', async message => {
	if (message.body.toString().toLowerCase().startsWith('ping,')) { 
		// send back "pong" to the chat the message was sent in
        const result = await model.generateContent(message.body);
        console.log(result.response.text());
		client.sendMessage(message.from, result.response.text()); //send response to Whatsapp
	}
});


// Start your client
client.initialize();
