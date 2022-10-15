const express = require("express");
const advocateRoute = require("./routes/avocateRoutes");
const companyRoute = require("./routes/companyRoutes")
const app = express();

app.use("/advocate", advocateRoute);
app.use("/companies", companyRoute);

module.exports = app;