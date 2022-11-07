const express = require("express")
const advocateRoute = require("./routes/avocateRoutes")
const companyRoute = require("./routes/companyRoutes")
const HandleError = require("./config/handleError")
const app = express()
const fs = require("fs")


const indexPage = fs.readFileSync("index.html", "utf-8")
app.use(express.json())

app.get("/", (req, res) => res.redirect("/v1/api/"))
app.get("/v1/api/", (req, res) => { res.send(indexPage)});
app.use("/v1/api/advocates", advocateRoute)
app.use("/v1/api/companies", companyRoute)

// HANDLE INVALID ROUTES
app.all("*", (req, res, next) => {
    next(new HandleError("Routes is invalid, please visit / to navigate", 404))
})

// HANDLE GLOBAL ERROR
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const status = err.status || "Error"

    res.status(statusCode).json({
        status: status,
        err: err.message
    })
})

module.exports = app