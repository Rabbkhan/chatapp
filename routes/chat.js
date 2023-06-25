const express = require('express');

const route = express.Router();
const data = require('./data');

route.get("/", (req, res, next) => {
  res.send(`
    <form action="/" onsubmit="document.getElementById('username').value =localStorage.getItem('username')" method="POST"> 
      <input type="text" id="message" name="message" placeholder="message"/> 
      <input type="hidden" name="username" id="username">
      <button type="submit">send</button>
    </form>
    <ul>
      ${data.map(item => `<li>${item}</li>`).join('')}
    </ul>
  `);
});

route.post('/', (req, res, next) => {
  const message = `${req.body.username}:${req.body.message}`;
  data.push(message);
  console.log(message);
  console.log(data);
  res.redirect("/");
});

module.exports = route;
