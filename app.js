const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require("./routes")(app);

const PORT = 8080;
const host = "localhost";
app.listen(PORT, host, () => console.log("App running on http://" + host + ":" + PORT));