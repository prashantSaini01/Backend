const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const user = require('../models/user')
// const productController = require('../controllers/product');
const {
  authenticateAdminToken,
  authenticateToken,
} = require("../middleware/user.js");

// User Registration
router.post("/signup", userController.signUp);

// User Login
router.post("/login", userController.login);

// User Details
router.get("/details", authenticateToken, userController.details);

// Update Details
router.put("/update", authenticateToken, userController.updateDetails);

// Delete a user
router.delete("/delete/:id", authenticateAdminToken, userController.deleteUser);

module.exports = router;
