// Create server
const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(cookieParser());

app.use(express.json());          //backend allow to read frontend-data

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use("/api/auth", authRoutes);

module.exports = app;