const express = require('express');
const router = require('./routes');
const app = express();
app.use(express.static('../public'));


app.listen(8080, ()=>{
    console.log(
        `%cservidor funcionando`,
        `font-size: 24px;
        font-family: monospace;
        background: yellow;
        color: black;`
        )
});

app.use('/', router);



app.get("/productDetail", (req, res)=>{
    res.sendFile(__dirname + "/views/productDetail.html");
});
app.get('/contraolvidada', (req, res) => {
    res.sendFile(__dirname + '/views/contraolvidada.html');
  });
app.get("/botones", (req, res)=>{
    res.sendFile(__dirname + "/views/botones.html");
});