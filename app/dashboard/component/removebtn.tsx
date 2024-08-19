'use client'
import { useRouter } from "next/navigation";
export default function Removebtn({id}:any){
    const router=useRouter();
    const removeTodo = async ()=>{
        const confirmed= confirm("Are You sure to delete");
        if(confirmed){
           const res= await fetch(`http://localhost:3000/dashboard/apitodos?id=${id}`,{
                method:"DELETE", 
            });
            if(res.ok){
                router.refresh();
            }
        }

    }
    return(
        <div>
            <button onClick={removeTodo}>
                {/* <HiOutlineTrash size={24}/> */}Delete
            </button>
        </div>
    )
}