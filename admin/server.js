const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000; 
const adminRouter = require('./Routes/router');
require('dotenv').config(); 

app.use(express.json());
app.use(cors());

app.use('/', adminRouter);

app.listen(port ,() => {
    console.log(`Server running on port ${port}`);
});