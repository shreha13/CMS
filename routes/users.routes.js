const express = require('express');
const userController = require("../controllers/users.controller")
const userRouter = express.Router();

userRouter.post('/', userController.addUser);
userRouter.get('/', userController.getUsers);

userRouter.get('/:userId', userController.getUser);

module.exports = userRouter