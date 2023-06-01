import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
//Temp change to use local data
import  Products from "../data/products.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => { 
  // const products = await Product.find({});
  res.json(Products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  // const product = await Product.findById(req.params.id);
  const product = Products.find((product) => product._id === req.params.id);
  
  if(product){
    return res.json(product)
  }

  res.status(404);
  throw new Error('Resource not found');
});

export { getProducts, getProductById };