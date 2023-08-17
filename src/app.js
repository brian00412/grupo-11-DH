const express = require('express');
const router = require('./routes');
const routerProduct = require('./routes/productsR');
const app = express();
app.use(express.static('./public'));
app.set("view engine", "ejs");
app.set("views", "src/views/products");



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

app.use("/", routerProduct)

app.get('/contraolvidada', (req, res) => {
    res.sendFile(__dirname + '/views/contraolvidada.html');
  });
app.get("/botones", (req, res)=>{
    res.sendFile(__dirname + "/views/botones.html");
});