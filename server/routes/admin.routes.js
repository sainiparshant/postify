import express, { Router } from 'express'
import { adminLogin, approvedCommentById, deleteCommentById, getAllBlogs, getAllComments, getDashboard } from '../controllers/Admin.controller.js';
import auth from '../middlewares/auth.js';



const router = Router();

router.post("/login", adminLogin);
router.get("/comments", auth, getAllComments);
router.get("/blogs", auth, getAllBlogs);
router.post("/delete-comment", auth, deleteCommentById);
router.post("/approve-comment", auth, approvedCommentById);
router.get("/dashboard", auth, getDashboard);






export default router;