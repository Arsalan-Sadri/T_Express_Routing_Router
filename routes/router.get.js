const express = require('express');
const router = express.Router();
const app = express();

router.get("/", (req, res) => res.send("Welcome!"));

router.get('/user/:id', function (req, res) {
    console.log('and this matches too');
    res.end();
});

app.use(router);

const PORT = process.env.PORT || 8080;
const host = "localhost";
app.listen(PORT, host, () =>
    console.log("App running on http://" + host + ":" + PORT));