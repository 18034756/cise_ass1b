const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const articles = require('./routes/api/articles');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/articles', articles);
const path=require("path");

app.use(express.static(path.resolve(_dirname,"./client/build")));

app.get("*",function(request,response){
    response.sendFile(path.resolve(_dirname,"./client/build","index.html"));
})
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server111 running on port ${port}`));

