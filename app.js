const express = require("express");
const app = express()

app.listen(4040, () => console.log("SERVIDOR RODANDO"))

app.get("/", (req, res) => {
    res.send("Você está na pagina inicial!")
})

app.get("/manuntencao", (req, res) => {
    res.sendFile(__dirname + "/views/manuntencao.html")
})
