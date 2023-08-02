const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(8080, ()=>{
    console.log(
        "%cservidor funcionando",
        `font-size: 24px;
        font-family: monospace;
        background: yellow;
        color: black;`
        )
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get("/productDetail", (req, res)=>{
    res.sendFile(__dirname + "/views/productDetail.html");
});