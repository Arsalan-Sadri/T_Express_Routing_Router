const express = require("express");
const router = require("./routes");

const app = express();
app.use(router);

const PORT = process.env.PORT || 8080;
const host = "localhost"
app.listen(PORT, host, () => console.log("App running on http://" + host + ":" + PORT));