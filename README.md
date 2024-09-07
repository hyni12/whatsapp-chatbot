# WhatsappChatbot

A simple WhatsApp chatbot built with Node.js using the Whatsapp-web.js library. This project integrates Google Gemini (generative AI) to handle content generation and provides real-time QR code generation for easy WhatsApp integration. It's designed to be a quick and efficient way to set up an intelligent chatbot using modern tech stacks.

### Tech stack

1. [NodeJS](https://nodejs.org/id)
2. [Whatsapp-webjs](https://wwebjs.dev/)
3. [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
4. [google/generative-ai (Gemini)](https://www.npmjs.com/package/@google/generative-ai)
5. [nodemon](https://www.npmjs.com/package/nodemon)

### Steps

- [ ] Create a Node.js project:
    
    ```bash
    npm init
    ```
    
- [ ] Install all libraries:
    
    ```bash
    npm i whatsapp-web.js qrcode-terminal @google/generative-ai nodemon
    ```
    
- [ ] Generate a Gemini API key: [https://ai.google.dev/](https://ai.google.dev/)
- [ ] Code `generateContent` from Gemini
- [ ] Code WhatsappJS to handle WhatsApp messages
- [ ] Test!

---

### How to clone and run this project

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/WhatsappChatbot.git
    ```

2. **Navigate to the project folder:**

    ```bash
    cd WhatsappChatbot
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**
   
   - Create a `.env` file and add your [Google Gemini API Key](https://ai.google.dev/) in the following format:
   
    ```bash
    GOOGLE_GEMINI_API_KEY=your-api-key-here
    ```

5. **Run the project:**

    ```bash
    npm start
    ```

6. **Scan the QR code:**
   - When you run the project, a QR code will be generated in the terminal. Open WhatsApp on your phone and scan the QR code to connect the bot to your WhatsApp account.

7. **Interact with the bot:**
   - Send a message to your bot and watch it respond using the Gemini AI and WhatsApp integration!

8. **For development:**
   - If you want to make changes and automatically restart the app, use `nodemon`:

    ```bash
    npm run dev
    ```

---

Now you're ready to start building and testing your WhatsApp chatbot!
