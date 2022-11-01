const mongoose = require("mongoose");
const app = require("./../app");

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
// const mongooseConnect = process.env.CONNECT_CLOUD.replace(/<password>/, () =>  process.env.PASSKEY);

function Connection(){
// mongoose.connect(mongooseConnect, connectionParams)
//     .then( () => {
//         console.log('Connected to the database ')
//     })
//     .catch( (err) => {
//         console.error(`Error connecting to the database. n${err}`);
//     })

//     app.listen(PORT, () => {
//         console.log("Server Running... on port " + PORT);
//         console.log(mongooseConnect);
// })

// LOCAL DEVELOPMENT


const PORT = process.env.PORT || 3000;

console.log(process.env.CONNECT_MONGOOSE)
mongoose.connect(process.env.CONNECT_MONGOOSE).then(() => {
    app.listen(PORT, () => {
        console.log("Server Running... on port " + PORT);
    }) 
});

}

module.exports = Connection;