const express = require("express");

const app = express();

app.get("/", (req, res) => {
res.send("gellp worlkd")
})

app.listen(3000, ()=>{
    console.log("server is runnign at 3000");
})