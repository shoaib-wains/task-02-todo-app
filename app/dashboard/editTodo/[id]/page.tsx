'use client'
import EditForm from "../../component/editform";

const getTodosById= async(id:any) =>{
    try{
        const res= await fetch(`http://localhost:3000/dashboard/apitodos/${id}`,{
            cache:"no-store"
        })
        if(!res.ok){
            console.log("Error Occured")
           }
           return res.json();
    }
    catch(error){
        console.log(error)
    }
}
export default async function EditTodo({params}:any){
    const { id }=params;
    const mytodos=await getTodosById(id);
    // const { todo }=todos;
          return(
     <EditForm id={id} todo={mytodos}/>
        )
}
