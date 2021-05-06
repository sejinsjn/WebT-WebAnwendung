const express = require("express");
const router = require("./routes/index");

const app = express();
app.use(express.static(__dirname + '/public'));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(router);

console.log("Server lauscht http://localhost:8023/");
app.listen(8023);