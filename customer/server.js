const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 1234; 
const userRouter = require('./routes/userRoutes');
require('dotenv').config(); 

app.use(express.json());
app.use(cors());

app.use('/', userRouter);

app.listen(port ,() => {
    console.log(`Server running on port ${port}`);
});