const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
require('dotenv').config;
const port  = process.env.port || 5000
mongoose.connect(process.env.mongourl, { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model("User", new mongoose.Schema({ username: String, password: String }));
const Message = mongoose.model("Message", new mongoose.Schema({ username: String, text: String, timestamp: { type: Date, default: Date.now } }));

app.use(express.json());
app.use(cors());


app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await new User({ username, password: hashedPassword }).save();
    res.send("Signup successful!");
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    res.json(user && await bcrypt.compare(password, user.password));
});

wss.on("connection", (ws) => {
    Message.find().sort({ timestamp: 1 }).then(messages => messages.forEach(msg => ws.send(JSON.stringify(msg))));

    ws.on("message", async (msg) => {
        const { username, text } = JSON.parse(msg);
        const newMessage = new Message({ username, text });
        await newMessage.save();

        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ username, text }));
            }
        });
    });
});

server.listen(port, () => console.log(`server running on port ${port}`));
