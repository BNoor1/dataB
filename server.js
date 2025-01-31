
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());


const userRoutes = require('./routes/userRoutes');
const donationRoutes = require('./routes/donationRoutes');
const boxRoutes = require('./routes/boxRoutes');
const productRoutes = require('./routes/productRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const distributionRoutes = require('./routes/distributionRoutes');
const associationRoutes = require('./routes/associationRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const activityLogRoutes = require('./routes/activityLogRoutes');
const adminRoutes = require('./routes/adminRoutes');


app.use('/api/users', userRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/boxes', boxRoutes);
app.use('/api/products', productRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/distributions', distributionRoutes);
app.use('/api/associations', associationRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/activity-logs', activityLogRoutes);
app.use('/api/admins', adminRoutes);


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server only after a successful connection
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });
