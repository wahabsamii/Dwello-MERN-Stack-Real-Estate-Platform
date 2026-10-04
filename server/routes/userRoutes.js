import express from "express";
import { AllUsers, login, register, UpdateProfile } from "../controllers/authControllers.js";
import upload from "../middlewares/multer.js";

const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/all', AllUsers);
router.put('/profile',upload.single("photo"), UpdateProfile);

export default router;