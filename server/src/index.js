const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const port = process.env.PORT || 9000;
const routes = require("./actions.route");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/actions", routes);

app.listen(port, () => console.log(`app listening on port ${port}!`));

module.exports = app;
