const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const cors = require('cors');
require('dotenv').config(); 
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors());

// this proxy is set up for docker conatiner so run this service inside a docker
app.use('/customers', proxy('http://microservicecustomer:1234'));
app.use('/admin', proxy('http://microserviceadmin:5000'));
app.use('/', proxy('http://microservicecustomer:1234'));

app.listen(port ,() => {
    console.log(`Server running on port ${port}`);
});