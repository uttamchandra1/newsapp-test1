const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");

const database = require("./config/database");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

database.connect();

app.use(bodyParser.json());
app.use(cors());

// routes
const createarticles = require("./routes/article")
const getAllArticles = require("./routes/article")
app.use("/api/" , createarticles)
app.use("/api/" , getAllArticles)

// Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
