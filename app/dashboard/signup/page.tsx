'use client'
import Image from 'next/image'
import styles from '@/app/ui/home.module.css'
import { useState } from 'react'
export default function SignUp(){

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirm,setConfirm]=useState('');

    const handleSubmit= async(e:any)=>{
        e.preventDefault()

       try{ 
        const res= await fetch('apisignup', {method:'POST',
        headers:{'Content-Type':'Application/json'},
        body:JSON.stringify({
            name,
            email,
            password,
            confirm
        })
       })
       if(res.ok){
        const form=e.target;
        form.reset();
        alert("ok")
       }else{
        console.log('User registration failed')
       }

       } catch(error){
        console.log('Error during registration')
       }
    }



    return(
        <div className={`${styles.list} bg-transparent justify-center`}>
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
          <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col items-center justify-center py-10 gap-5">
            <div className={`${styles.lablediv} h-10 flex flex-row items-end justify-start`}>
              <label className="text-zinc-100 opacity-100">Name</label>
            </div>
            <input onChange={e=>{setName(e.target.value)}} className={`${styles.inputname} h-14 text-zinc-100 opacity-100 rounded-full border-4`} placeholder="Your Name"  type="text" name="name" />
            <div className={`${styles.lablediv} h-10 flex flex-row items-end justify-start`}>
              <label className="text-zinc-100 opacity-100" htmlFor="">Email</label>
            </div>
            <input onChange={e=>{setEmail(e.target.value)}} className={`${styles.inputname} h-14 w-139 text-zinc-100 opacity-100 top-148 rounded-full border-4`} placeholder="shoaibjutt4412l@gmail.com" type="text" name="email" />
            <div className={`${styles.lablediv} h-10 flex flex-row items-end justify-start`}>
              <label className="text-zinc-100 opacity-100">Password</label>
            </div>
            <input onChange={e=>{setPassword(e.target.value)}} className={`${styles.inputname} h-14 text-zinc-100 opacity-100 rounded-full border-4`} placeholder="Password"  type="number" name="password" />
            <div className={`${styles.lablediv} h-10 flex flex-row items-end justify-start`}>
              <label className="text-zinc-100 opacity-100" htmlFor="">Confirm Password</label>
            </div>
            <input onChange={e=>{setConfirm(e.target.value)}} className={`${styles.inputname} h-14 w-139 text-zinc-100 opacity-100 top-148 rounded-full border-4`} placeholder="Confirm Password" type="number" name="confirm" />
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
            <button  className={`${styles.sp} w-80 h-16 border-4 rounded-full py-3`} >Sign Up</button>
          </div>
          </div>
          </form>
        </div>  
        
    )
}

