import mongoose from "mongoose"

export const connectMongoDb = async()=>{
    try{ 
        await mongoose.connect('mongodb+srv://shoaibjutt4412l:kjyoXn0XBrfmZ5nU@cluster0.zycnlux.mongodb.net/Todo_App')
        console.log('Connected to Mongodb')

    }catch(error){
        console.log('Error connecting to mongodb',error)
    }
};
export default connectMongoDb;