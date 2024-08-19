// import AcmeLogo from '@/app/ui/acme-logo';
// import LoginForm from '@/app/ui/login-form';
 
// export default function Page() {
//   return (
//     <main className="flex items-center justify-center md:h-screen">
//       <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
//         <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
//           <div className="w-32 text-white md:w-36">
//             <AcmeLogo />
//           </div>
//         </div>
//         <LoginForm />
//       </div>
//     </main>
//   );
// }





































'use client'
import  styles  from "@/app/ui/home.module.css"
import { useState } from "react"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Login(){

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const router=useRouter();
    async function handleSubmit(e:any){
        e.preventDefault()
        console.log(email,password);
        // try{
        //     console.log("hello")

        //     const res= await signIn('credentials',{
        //         email:email,
        //         password:password,
        //     });
        //     // router.replace('dashboard')
        // }catch(error){
        //     console.log(error);
        // }


    }

    return(<div className={`${styles.list} bg-transparent justify-center`}>
        <div className={`${styles.topdiv}w-360 h-24 bg-black flex flex-row items-center justify-between`}>
        {/* <Image src='/theme.png'
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
        /> */}
        </div>
        <form onSubmit={handleSubmit} action="">
        <div className="flex flex-col items-center justify-center py-10 gap-5">
          <div className={`${styles.lablediv} h-10 flex flex-row items-end justify-start`}>
            <label className="text-zinc-100 opacity-100">Name</label>
          </div>

          <input onChange={e=>{setEmail(e.target.value)}} className={`${styles.inputname} h-14 w-139 text-zinc-100 opacity-100 top-148 rounded-full border-4`} placeholder="shoaibjutt4412l@gmail.com" type="text" name="email" />
          <div className={`${styles.lablediv} h-10 flex flex-row items-end justify-start`}>
            <label className="text-zinc-100 opacity-100">Password</label>
          </div>
          <input onChange={e=>{setPassword(e.target.value)}} className={`${styles.inputname} h-14 text-zinc-100 opacity-100 rounded-full border-4`} placeholder="Password"  type="number" name="password" />
          {/* Buttons */}
          <div className=" flex flex-col items-center justify-center py-10 gap-5">
          {/* <button name="SiG" className={`${styles.cp} w-80 h-16 border-4 rounded-full py-3`}> */}
          {/* <Image src='/google.png'
           alt='Screen Shot'
           width={48}
           height={48}
           className='w-12 h-12'
          /> */}
          {/* </button> */}
          <Link href={'/dashboard'}  className={`${styles.sp} w-80 h-16 border-4 rounded-full py-3`} >Login in</Link>
                                  <Link href={'/signup'}>
                        Don't have an account? or Sign Up!
                        {/* <HiPencilAlt size={24}/> */}
                        </Link>
        </div>
        </div>
        </form>
      </div>)
}