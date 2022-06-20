import express from "express";
import cors from "cors";

import exibirTweets from "./exibirTweets.js";

const server = express();

server.use([cors(), express.json()]);



const tweets = [];
const usuarios = [];



server.post("/sign-up", (req, res) => {
    usuarios.push(req.body)
    res.send("OK")
});


server.get("/tweets", (req,res) => {
    const ultimosDezTweets= exibirTweets(tweets,usuarios);
    res.send(ultimosDezTweets);
});
server.post("/tweets", (req,res) => {
    tweets.push(req.body)
    res.send("OK")
});





server.listen(5000);