require('dotenv').config();
"use strict";

const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const moment = require("moment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = process.env.MONGODB_URI;

//Loads MongoDB and processes for tweet storage
MongoClient.connect(MONGODB_URI, (err, db) => {
    if (err) {
        console.error(`Failed to connect: ${MONGOBD_URI}`);
        throw err;
    }

    console.log(`connected to mongodb: ${MONGODB_URI}`);

    const DataHelpers = require("./lib/data-helpers.js")(db);

    const tweetsRoutes = require("./routes/tweets")(DataHelpers);

    app.use("/tweets", tweetsRoutes);
    app.listen(PORT, () => {
        console.log("Example app listening on port " + PORT);
    });

})