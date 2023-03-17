const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const connectDB = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongoDB connected`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;

//Use this method in server.js to connect the mongoDB and start the server

// const startServer = async() => {
//     try {
//         await connectDB();
//         app.listen(PORT, () => {
//             console.log(`Server running on port: ${PORT}`);
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }
// startServer();