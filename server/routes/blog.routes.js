import express, { Router } from 'express';
import { addBlog } from '../controllers/blog.controller.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';


const blogRouter = Router();

blogRouter.post("/add", auth,  upload.single('image'), addBlog);


export default blogRouter;