import express from 'express';
import dotenv, { config } from 'dotenv';
dotenv.config();
import products from './data/products.js';

const port = process.env.PORT || 6000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  res.json(products.find(product => product._id === req.params.id));
});

app.listen(port, () => console.log(`Server running on port ${port}`));