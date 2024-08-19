import Image from "next/image"
import styles from '@/app/ui/home.module.css'
import {stint} from '@/app/ui/fonts'

export default function Settings(){



    return(
      <div className={`${styles.list} bg-transparent justify-center`}>
          <div className={`${styles.topdiv} grow h-24 wbg-black flex flex-row items-center justify-between`}>
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

          <div className="flex flex-col items-center justify-center">
          <h1 className={`${stint.className} text-8xl leading-32 text-zinc-100 opacity-45 tracking-tight`}>Settings.</h1>
          <div className={`${styles.profilediv} h-14 w-14 rounded-full my-10`}>

          </div>
            <h1 className="text-zinc-100 opacity-100 top-86" >Profile Photo</h1>
          </div>

          <div className="flex flex-col items-center justify-center py-10 gap-5">
            <label className="text-zinc-100 opacity-100">Name</label>
            <input className={`${styles.inputname} h-14 text-zinc-100 opacity-100 top-148 rounded-full border-4`} placeholder="Your Name"  type="text" name="name" />
            <label className="text-zinc-100 opacity-100" htmlFor="">Email</label>
            <input className={`${styles.inputname} h-14 w-139 text-zinc-100 opacity-100 top-148 rounded-full border-4`} placeholder="shoaibjutt4412l@gmail.com" type="text" name="email" />
          </div>

          <div className=" flex flex-col items-center justify-center pb-10 gap-10">
            <button className={`${styles.cp} w-80 h-16 border-4 rounded-full py-3`}>Add List</button>
            <button className={`${styles.sp} w-80 h-16 border-4 rounded-full py-3`} >Save Changes</button>
          </div>
      </div>
    )
}