import mongoose from 'mongoose'

const connectDb = async() =>{
    try {
        mongoose.connection.on("connected" , ()=> console.log("Databse connected"))
        await mongoose.connect(`${process.env.MONGO_URL}/postify`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDb;