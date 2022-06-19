import express from "express";
import cors from "cors";

const server = express();

server.use([cors(), express.json()]);

const tweets = [];
const usuarios = [];

server.post("/sign-up", (req, res) => {

});


server.get("/tweets", (req,res) => {
    
});
server.post("/tweets", (req,res) => {
    
})





server.listen(5000)