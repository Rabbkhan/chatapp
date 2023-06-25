const express = require('express');

const route = express.Router();

route.get("/", (req, res) => {
  res.send(`
    <form action="/chat" method="POST">
      <input type="text" name="personName" id="personNameInput" placeholder="Enter your name" />
      <button type="submit">Chat</button>
    </form>
    <div id="chatMessage"></div>
    <script>
      const personName = localStorage.getItem('personName');

      if (personName) {
        const chatMessage = document.getElementById('chatMessage');
        chatMessage.innerText = \`Hello, \${personName}! This is the chat data.\`;
      }

      document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.getElementById('personNameInput');
        const name = input.value;
        localStorage.setItem('personName', name);
        window.location.reload(); // Refresh the page to display the chat message
      });
    </script>
  `);
});

route.post("/chat", (req, res) => {
  const { personName } = req.body;
  res.send(`Hello, ${personName}! This is the chat data.`);
});

module.exports = route;
