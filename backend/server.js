import express from 'express';
import dotenv, { config } from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';

import products from './data/products.js';

const port = process.env.PORT || 6000;

connectDB(); // Connect to MongoDB  
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  res.json(products.find(product => product._id === req.params.id));
});

app.listen(port, () => console.log(`Server running on port ${port}`));