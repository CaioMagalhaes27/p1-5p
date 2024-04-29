const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/yourdatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));