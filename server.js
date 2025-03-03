const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const peopleRoute = require('./routes/people');

const PORT = process.env.PORT || 8000;

const app = express();

dotenv.config();

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/people', peopleRoute);

app.get('/', (req, res) => res.send('Wing Dating API'));

// DB Connection
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));