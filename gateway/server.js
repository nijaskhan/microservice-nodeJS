const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const cors = require('cors');
require('dotenv').config(); 
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use(cors());

// app.use('/', (req,res)=>{
//     res.status(200).json({message: 'home page'})
// });  
app.use('/customers', proxy('http://localhost:1234'));
app.use('/admin', proxy('http://localhost:5000'));
app.use('/', proxy('http://localhost:1234'));

app.listen(port ,() => {
    console.log(`Server running on port ${port}`);
});