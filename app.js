const express = require('express');
const bodyParser = require('body-parser');
const UserLogin = require('./routes/login')
const chatroute = require('./routes/chat')
const app =express();
const PORT=4000;
app.use(bodyParser.urlencoded({extended:false}))
app.use('/user',UserLogin);
app.use(chatroute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });