import express, { Router } from 'express'
import { adminLogin, approvedCommentById, deleteCommentById, getAllBlogs, getAllComments, getDashboard } from '../controllers/Admin.controller.js';
import auth from '../middlewares/auth.js';



const router = Router();

router.post("/login", adminLogin);
router.post("/comments", auth, getAllComments);
router.post("/blogs", auth, getAllBlogs);
router.post("/delete-comment", auth, deleteCommentById);
router.post("/approve-comment", auth, approvedCommentById);
router.post("/dashboard", auth, getDashboard);






export default router;