import express, { Router } from 'express'
import { adminLogin } from '../controllers/Admin.controller.js';



const router = Router();

router.post("/login", adminLogin);

export default router;