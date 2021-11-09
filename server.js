const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Using built in middleware functions
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static('public'));
app.use(cors());


// Using Routes
const useRoutes = require('./routes/routes');
useRoutes(app)


const PORT = process.env.PORT || 8000

// Connecting to the MongoDB using mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/assignment_12`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is connected at http://localhost:${PORT}`);
        });
    })
    .catch(error => {
        console.log(error);
    })