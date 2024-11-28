// server.js
const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();

// Чтение сертификатов SSL
const options = {
  cert: fs.readFileSync(
    "/etc/letsencrypt/live/signal-server.waterhedgehog.com/fullchain.pem"
  ),
  key: fs.readFileSync(
    "/etc/letsencrypt/live/signal-server.waterhedgehog.com/privkey.pem"
  ),
};

// Настройка маршрута для отдачи HTML контента
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Замените на свой путь к HTML файлу
});

// Запуск HTTPS сервера на порту 443 (по умолчанию для HTTPS)
https.createServer(options, app).listen(443, () => {
  console.log(
    "HTTPS сервер запущен на https://signal-server.waterhedgehog.com"
  );
});
