const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()

// view engine setup
app.set('view engine', 'ejs');

app.use(express.static('src'))


app.get("/", function(req, res) {
  res.render("index")
})

app.listen(3000, function () {
    console.log("Webserver gestart op poort 3000");
});
