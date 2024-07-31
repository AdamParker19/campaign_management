
import mongoose from "mongoose";
const dotenv = require('dotenv');

dotenv.config();
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 45000
};


export const mongodbConnect = async (): Promise<void> => {
    await mongoose.connect(process.env.MONGO_URL, options);

    mongoose.connection.on('connected', function () {
        console.log('Mongoose default connection open to db');
    });

    mongoose.connection.on('error', function (err) {
        console.error('Mongoose default connection error: ' + err);
    });
}
