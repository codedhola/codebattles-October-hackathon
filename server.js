const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({ path: "./config.env"});


const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.CONNECT_MONGOOSE).then(() => {
    app.listen(PORT, () => {
        console.log("Server Running... on port " + PORT);
    })
    
})