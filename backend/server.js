import express from 'express';
import products from './data/products.js';

const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  res.json(products.find(product => product._id === req.params.id));
});

app.listen(port, () => console.log(`Server running on port ${port}`));