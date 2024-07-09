const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
 
const app = express();
app.use(bodyParser.json());
 
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
 
// Import routes
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');
 
// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/product', productRouter);
 
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// const express = require("express");
// const mongoose = require("mongoose");
// const { check, validationResult } = require("express-validator");
// require("dotenv").config();

// const app = express();
// app.use(express.json());

// // Error handling middleware
// app.use((err, req, res, next) => {
//   if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
//     return res.status(400).send({ message: "Bad request: Invalid JSON" });
//   }
//   next();
// });

// // Connect to the database
// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => console.log("Database connection successful!"));

// // Sample route with JSON validation
// app.post(
//   "/api/v1/user/",
//   [
//     check("name").isString().withMessage("Name must be a string"),
//     check("email").isEmail().withMessage("Email must be valid"),
//   ],
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     // Your user handling code here
//     res.send("User route");
//   }
// );

// // Connecting routes
// const userRouter = require("./routes/user");
// app.use("/api/v1/user/", userRouter);

// const productRouter = require("./routes/product");
// app.use("/api/v1/product/", productRouter);

// app.listen(process.env.PORT || 3000, () =>
//   console.log(`Server is running on port ${process.env.PORT || 3000}`)
// );
