import express from 'express';
import dotenv, { config } from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productsRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

const port = process.env.PORT || 6000;

connectDB(); // Connect to MongoDB  
const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));