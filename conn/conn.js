require('dotenv').config();
const mongoose = require('mongoose')

const connectDatabase = async (req,res) =>{
    await mongoose.connect(process.env.MONGO_URI, {
}).then((data) => {
    console.log(`MongoDB connected with server: ${data.connection.host}`);
}).catch((err) => {
    res.status(400).json({message: 'Databsae not connected'})
    process.exit(1);
});
}


module.exports = connectDatabase