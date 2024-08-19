import { NextResponse } from "next/server"
import connectMongoDb from "@/Mongo/mongodb";
import Todos from '@/models/todolist'

export async function POST(req:any){
    try{
   const {todo}= await req.json()
   await connectMongoDb();
   await Todos.create({todo});

   return NextResponse.json({message:'Todos Created'})
    }catch(error){
        return NextResponse.json({message:'An error Occured'})
    }
}


export async function GET(){
    await connectMongoDb();
    const mytodos= await Todos.find();
    return NextResponse.json({mytodos})
}

export async function DELETE(request:any){
    const id= request.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Todos.findByIdAndDelete(id);  
    return NextResponse.json({message:"Todo Deleted"});

}




