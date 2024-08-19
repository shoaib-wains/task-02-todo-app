import connectMongoDb from "@/Mongo/mongodb"
import Todos from "@/models/todolist";
import { NextResponse } from "next/server";

export async function PUT(request:any,{params}:any) {
    const {id} =params;
    const {newtodo:todo}=await request.json();
        await connectMongoDb();
        await Todos.findByIdAndUpdate(id,{todo});
        return NextResponse.json({message:"Todo Updated"})
       
}
export async function GET({params}:any) {
    const {id}=params;
    await connectMongoDb();
    const todo=await Todos.findOne({_id:id})
    return NextResponse.json({todo})
}