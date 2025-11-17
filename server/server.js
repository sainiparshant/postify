import 'dotenv/config'
import express from 'express';
import cors from 'cors'
import connectDb from './config/db.js';
import router from './routes/admin.routes.js';
import blogRouter from './routes/blog.routes.js';



const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


app.get('/' , (req,res) => {
    res.send("API is running");
});

app.use('/api/admin', router);
app.use('/api/blog' , blogRouter)


app.listen(port, ()=>{
    connectDb();
    console.log('Server is  listening on' , port);
});

export default app;