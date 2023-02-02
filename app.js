// Basic Lib Import 
const  express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

// Security Middleware Lib import 
const  rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import 
const mongoose = require('mongoose');

// Security Middleware Lib implement
app.use(cors());
// app.use(express.json())
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}))

// Body Parser Implement
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({windowMs: 15*60*1000, max:3000});
app.use(limiter);

// Mongo DB Database Connection 
let URI = "mongodb+srv://<username>:<password>@cluster0.ergjf.mongodb.net/task-manager"
let OPTION = {user: 'testUser6666', pass: 'testUser6666', autoIndex: true}
mongoose.connect(URI, OPTION, (error)=>{
    console.log('DB Connection Success');
    console.log(`Connection Error: ${error}`);
})


// Routing Implement
app.use('/api/v1/', router);

// Undefined Route 
app.use('*', (req,res) => {
    res.status(404).json({status: 'Failed', data: 'URL Not Found'})
})



module.exports = app;








