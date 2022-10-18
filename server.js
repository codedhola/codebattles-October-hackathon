const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config({ path: "./config.env"});

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}


const PORT = process.env.PORT || 3000;
const mongooseConnect = process.env.CONNECT_CLOUD.replace(/<password>/, () =>  process.env.PASSKEY);

mongoose.connect(mongooseConnect, connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

    app.listen(PORT, () => {
        console.log("Server Running... on port " + PORT);
})