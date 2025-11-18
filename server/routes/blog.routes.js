import express, { Router } from 'express';
import { addBlog, addComment, deleteBlogById, getAllBlogs, getBlogById, getBlogComments, togglePublish } from '../controllers/blog.controller.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';


const blogRouter = Router();

blogRouter.post("/add", auth,  upload.single('image'), addBlog);
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete",auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.post("/add-comment" , addComment);
blogRouter.post("/comments" , getBlogComments);





export default blogRouter;