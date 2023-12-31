const express = require('express');
const router = require('./routes');
const routerProduct = require('./routes/productsR');
const userRouter = require("./routes/users")
const app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

app.set("view engine", "ejs");
app.set("views", "src/views");

app.listen(8001, () => {
    console.log( `servidor funcionando en el 8001`)
});

app.use('/', router);

app.use('/', userRouter);
app.use('/user', userRouter);

app.use("/", routerProduct);

app.get('/contraolvidada', (req, res) => {
    res.sendFile(__dirname + '/views/contraolvidada.html');
});
app.get("/botones", (req, res) => {
    res.sendFile(__dirname + "/views/botones.html");
});