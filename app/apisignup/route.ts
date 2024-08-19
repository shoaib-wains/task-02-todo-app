import { NextResponse } from "next/server"
import connectMongoDb from "@/Mongo/mongodb";
import User from '@/models/model'
// import Todos from '@/models/todolist'


export async function POST(req:any){
    try{
   const {name, email, password, confirm}= await req.json()
   await connectMongoDb();
   await User.create({name,email,password,confirm});

   return NextResponse.json({message:'User Registered'})
    }catch(error){
        return NextResponse.json({message:'An error Occured'})
    }
}


export async function GET(){
    await connectMongoDb();
    const users= await User.find();
    return NextResponse.json({users})
}




