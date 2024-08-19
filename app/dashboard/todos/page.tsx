import  styles  from '@/app/ui/home.module.css';
import Link from 'next/link';
import Removebtn from '@/app/dashboard/component/removebtn';  
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { stint } from '@/app/ui/fonts';

const getTodo=async()=> {
    try{
       const res = await fetch('http://localhost:3000/dashboard/apitodos',{
            cache:'no-store'
        })
        if(!res.ok){
            throw new Error('Failed to Fetch from mongodb');          
        }
        return res.json();

    }catch(error){
        console.log(error)
    }
}                 
export default async function TodoList(){

    const {mytodos}  = await getTodo();
    return(
       <div className={`${styles.list} pb-10 bg-transparent justify-center`}>
         <div className={`${styles.topdiv}w-360 h-24 bg-black flex flex-row items-center justify-between`}>
          <Image src='/theme.png'
          alt='Screen Shot'
          width={48}
          height={48}
          className='block w-12 h-12'
          />
          <Image src='/Tune.png'
          alt='Screen Shot'
          width={48}
          height={48}
          className='block w-12 h-12'
          />
         </div>        
         <div className="flex flex-col justify-center pt-8">
           {mytodos.map((mytodo:any)=>{
           return(
                <div className={`${styles} pl-10 pb-10 bg-transparent flex flex-row justify-start justify-between`}>
                    <div className={`${styles.todos}"pl-10 flex flex-col"`}>
                        <h1>{mytodo.todo}</h1>
                    </div>
                    <div className='flex flex-row px-5 justfify-between'>
                        <Removebtn id={mytodo._id}/>
                        {/* <Link href={`/dashboard/editTodo/${mytodo._id}`}>
                        Update */}
                        {/* <HiPencilAlt size={24}/> */}
                        {/* </Link> */}
                    </div>
                </div>
            )
      })}
         </div>
         <div className="w-53 h-28 flex items-end justify-end pt-10">
                    <h1 className={`${stint.className} text-9xl leading-32 text-zinc-100 opacity-45 tracking-tight`}>Todo List.</h1>
                </div>
      </div>
      )
}


