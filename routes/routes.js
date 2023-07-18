const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// user routes
router.post("/create", UserController.create);
router.get("/getUser/:id", UserController.getUser);
router.get("/getAllUsers", UserController.getAllUsers);
router.post("/updateUser/:id", UserController.updateUser);
router.get("/deleteUser/:id", UserController.deleteUser);

module.exports = router;
