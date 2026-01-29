const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;

const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');

const moongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
connectDB();

const userRoutes = require('./routes/user.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/users', userRoutes);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});