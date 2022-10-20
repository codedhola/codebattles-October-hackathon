const mongoose = require("mongoose");
const connection = require("./config/db");

const app = require("./app");
require("dotenv").config({ path: "./config/config.env"});

connection();
