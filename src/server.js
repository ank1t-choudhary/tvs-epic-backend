const cors = require("cors");
const express = require("express");

const localPred = require("./controllers/localPred");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// app.options("/tvsinfo/local", cors());
app.use(localPred);

app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "Server is up" });
});

module.exports = app;
