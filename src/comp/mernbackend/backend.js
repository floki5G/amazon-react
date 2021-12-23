const express = require("express");
const app = express();
require("./conn");
const port = process.env.PORT || 8000;
app.get("/",(req,res)=>{
    res.send("hello from floki5g")
})

app.listen(port , () =>{
console.log(`server is running on ${port}`);
})