const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./Routes/taskRoutes');


const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const corsOptions ={
    origin:['http://localhost:3000', 'https://mern-task-app-api-sarani.onrender.com'], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/api/tasks",taskRoutes);
// const logger = (req, res, next) => {
//     console.log('Middleware ran');
//     next();
// }

//Example Route
app.get('/', (req, res) => {
    res.send('Home Page')
})

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);
        });
    })
    .catch = (error) => {
        console.log(error);
    }