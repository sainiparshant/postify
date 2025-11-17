import express, { Router } from 'express';
import { addBlog } from '../controllers/blog.controller.js';
import upload from '../middlewares/multer.js';


const blogRouter = Router();

blogRouter.post("/add", auth,  upload.single('image'), addBlog);


export default blogRouter;