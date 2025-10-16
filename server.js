// server.js

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен: http://localhost:${PORT}`);
});
