const mongoose = require("mongoose")
const app = require("./../app")
const PORT = process.env.PORT || 3000

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
const mongooseConnect = process.env.CONNECT_CLOUD.replace(/<password>/, () =>  process.env.PASSKEY);

function Connection(){
    mongoose.connect(mongooseConnect, connectionParams)
        .then( () => {
            console.log('Connected to the database ')
        })
        .catch( (err) => {
            console.error(`Error connecting to the database. n${err}`)
        })

        app.listen(PORT, () => {
            console.log("Server Running... on port " + PORT)
    })
}

// LOCAL DEVELOPMENT




// mongoose.connect(process.env.CONNECT_MONGOOSE, connectionParams).then(() => {
//     app.listen(PORT, () => {
//         console.log("Server Running... on port " + PORT)
//     }) 
// }).catch(err => console.log(err))

// }

module.exports = Connection