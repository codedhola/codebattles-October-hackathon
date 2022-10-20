require("dotenv").config({ path: "./config/config.env"}); // ENVIRONMENT VARIABLES

const connection = require("./config/db");

// INITIATE CONNECTION CALL
connection();
