import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";  
import users from "./data/users.js";  
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB  from "./config/db.js";

dotenv.config();


const importData = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users); // Insert all users into the database  
    const adminUser = createdUsers[0]._id; // Get the first user in the array of users
    const sampleProducts = products.map(product => { // Add the adminUser to each product in the array of products
      return { ...product, user: adminUser }
    });
    await Product.insertMany(sampleProducts); // Insert all products into the database

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // Exit with failure
  }
}

const destroyData = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1); // Exit with failure
  }
}

if (process.argv[2] === '-d') {
  destroyData();
} else {  
  importData();
}