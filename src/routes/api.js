const express = require('express');
const router = express.Router();
const { registration, login, profileUpdate, profileDetails, recoverVerifyEmail, recoverVerifyOTP, recoverResetPass } = require('../controllers/UsersController');
const { createTask, updateTaskStatus, taskListByStatus, taskStatusCount, deleteTask } = require('../controllers/TasksController');

const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');




//Routes
router.post('/registration', registration);
router.post('/login', login);

// Routes with middleware
router.post('/profileUpdate', AuthVerifyMiddleware, profileUpdate);
router.get('/profileDetails', AuthVerifyMiddleware, profileDetails);

// Routes for Forget Password
router.get('/recoverVerifyEmail/:email',  recoverVerifyEmail);
router.get('/recoverVerifyOTP/:email/:otp',  recoverVerifyOTP);
router.post('/recoverResetPass',  recoverResetPass);

// Task Routes with CRUD Operation
router.post('/createTask', AuthVerifyMiddleware, createTask);
router.get('/deleteTask/:id', AuthVerifyMiddleware, deleteTask);
router.get('/updateTaskStatus/:id/:status', AuthVerifyMiddleware, updateTaskStatus);
router.get('/taskListByStatus/:status', AuthVerifyMiddleware, taskListByStatus);
router.get('/taskStatusCount', AuthVerifyMiddleware, taskStatusCount);

module.exports = router;