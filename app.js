const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.sendFile("C:/Users/User/Documents/GitHub/project/server/index.html")
    //res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
  console.log("server listening on port", 3000);
});