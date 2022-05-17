const express = require('express');
const app = express();

app.get("/", (req, res )=>{
    res.send("API funcionado");
});

app.listen(3100, () => {
    console.log("Servidor na porta 3100: http://localhos:3100");
});