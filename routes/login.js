const express = require('express');
const route = express.Router();

route.get('/login', (req, res) => {
  res.send(`
    <form id="loginForm" action="/user/login" method="POST">
      <input type="text" name="name"/>
      <button type="submit">Login</button>
    </form>
    <script>
     let logindata = document.getElementById('loginForm')
     logindata.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        localStorage.setItem('username', name);
        window.location.href = '/';
      });
    </script>
  `);
});

route.post('/login', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = route;
