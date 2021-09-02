import express from "express";
import userController from "../controllers/user-controller.js";
import bodyExpresValidator from "express-validator";

const {body} = bodyExpresValidator;

const router = new express.Router();


router.post('/registration',
    body("login").isEmail(),
    body("password").isLength({min: 3, max: 32}),
    userController.registration
);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);




export default router;