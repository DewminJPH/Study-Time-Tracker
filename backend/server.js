const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');

const app = express(); 
const cors = require('cors');

const port = 3022;
const host = 'localhost';

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://test:123@cluster0.k2uel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
        } 
    catch (error) {
        console.log('Error connecting to MongoDB', error);
        }
    }; 

connect(); 

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
});

app.use('/api', router);