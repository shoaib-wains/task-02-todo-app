'use client'
import Image from "next/image"
import styles from '@/app/ui/home.module.css'
import {stint} from '@/app/ui/fonts'
import clsx from "clsx"
import { useState } from "react"

export default function Page(){
     const [todo,setTodo]=useState('')
     const handleSubmit= async(e:any)=>{
          e.preventDefault()
  
         try{ 
          const res= await fetch('apitodos', {method:'POST',
          headers:{'Content-Type':'Application/json'},
          body:JSON.stringify({
              todo
          })
         })
         if(res.ok){
          const form=e.target;
          form.reset();
         }else{
          console.log('Todo Addition Failed')
         }
  
         } catch(error){
          console.log('Error while Addition')
         }
      }



    const [theme,setTheme]=useState('')
    const vintageGarden=(e:any)=>{
     setTheme('vintagegarden')
    }

    const cosmicSymphony=(e:any)=>{
     setTheme('cosmicsymphony')
    }

    const rusticCharm=(e:any)=>{
     setTheme('rusticcharm')
    }

    const sunsetSerenade=(e:any)=>{
     setTheme('sunsetserenade')
    }

    const industrialChic=(e:any)=>{
     setTheme('industrialchic')
    }

    const blackoutNeutrals=(e:any)=>{
     setTheme('blackoutneutrals')
    }

    const vibrantSpectrum=(e:any)=>{
     setTheme('vibrantspectrum')
    }

    const coastalSunrise=(e:any)=>{
     setTheme('coastalsunrise')
    }

    const oceanicSerenity=(e:any)=>{
     setTheme('oceanicserenity')
    }


     return(
        <div className={`${styles.list} pb-10 bg-transparent justify-center`}>
          <form onSubmit={handleSubmit} action="">
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
            <div className="flex flex-row justify-center mt-10">

            {/* className={`${styles.input} w-112 h-14 rounded-full border-4`} */}
              <input onChange={e=>{setTodo(e.target.value)}} name='list'
               className={clsx({
                    [styles.input]: theme === '',
                    [styles.t1]: theme === 'vintagegarden',
                    [styles.t2]: theme === 'cosmicsymphony',
                    [styles.t3]: theme === 'rusticcharm',
                    [styles.t4]: theme === 'sunsetserenade',
                    [styles.t5]: theme === 'industrialchic',
                    [styles.t6]: theme === 'blackoutneutrals',
                    [styles.t7]: theme === 'vibrantspectrum',
                    [styles.t8]: theme === 'coastalsunrise',
                    [styles.t9]: theme === 'oceanicserenity',
                  })} placeholder="list"/>
              </div>
            {/* First line of themes */}
            <div className="w-230 h-14 flex flex-row justify-center gap-x-3 gap-y-1">
                <div className="w-82 h-14 flex items-center">
                     <button onClick={vintageGarden} className={`${styles.vintagegarden}  border-4 rounded-full`}>Vintage Garden</button>
                </div>
                <div className="w-82 h-14 flex items-center">
                     <button onClick={cosmicSymphony} className={`${styles.cosmicsymphony} border-4 rounded-full`}>Cosmic Symphony</button>
                </div>
                <div className="w-82 h-14 flex items-center">
                     <button onClick={rusticCharm} className={`${styles.rusticcharm} border-4 rounded-full`}>Rustic Charm</button>
                </div>
            </div>
            {/* Second Line of themes */}
            <div className="w-230 h-14 flex flex-row justify-center gap-x-3">
                <div className="w-82 h-14 flex items-center">
                     <button onClick={sunsetSerenade} className={`${styles.sunsetserenade} border-4 rounded-full`}>Sunset Serenade</button>
                </div>
                <div className="w-82 h-14 flex items-center">
                     <button onClick={industrialChic} className={`${styles.industrialchic} border-4 rounded-full`}>Industrial Chic</button>
                </div>
                <div className="w-82 h-14 flex items-center">
                     <button onClick={blackoutNeutrals} className={`${styles.blackoutneutrals} border-4 rounded-full`}>Blackout Neutrals</button>
                </div>
            </div>
            {/* Third line of themes */}
            <div className="w-230 h-14 flex flex-row justify-center gap-x-3">
                <div className="w-82 h-14 flex items-center">
                     <button onClick={vibrantSpectrum} className={`${styles.vibrantspectrum} border-4 rounded-full`}>Vibrant Spectrum</button>
                </div>
                <div className="w-82 h-14 flex items-center">
                     <button onClick={coastalSunrise} className={`${styles.coastalsunrise} border-4 rounded-full`}>Coastal Sunrise</button>
                </div>
                <div className="w-82 h-14 flex items-center">
                     <button onClick={oceanicSerenity} className={`${styles.oceanicserenity} border-4 rounded-full`}>Oceanic Serenity</button>
                </div>
            </div>
                <div className="flex flex-row justify-center pt-8">
                <button  className={clsx({
                    [styles.tbtn0]: theme === '',
                    [styles.tbtn1]: theme === 'vintagegarden',
                    [styles.tbtn2]: theme === 'cosmicsymphony',
                    [styles.tbtn3]: theme === 'rusticcharm',
                    [styles.tbtn4]: theme === 'sunsetserenade',
                    [styles.tbtn5]: theme === 'industrialchic',
                    [styles.tbtn6]: theme === 'blackoutneutrals',
                    [styles.tbtn7]: theme === 'vibrantspectrum',
                    [styles.tbtn8]: theme === 'coastalsunrise',
                    [styles.tbtn9]: theme === 'oceanicserenity',
                  })} 
               //  className={`${styles.addbtn} bg-white w-52 h-16 border-4 rounded-full py-3 px4`}
                >Add List</button>
                </div>
                <div className="w-53 h-28 flex items-end justify-end pt-10">
                    <h1 className={`${stint.className} text-9xl leading-32 text-zinc-100 opacity-45 tracking-tight`}>Add List.</h1>
                </div>
                </form>
        </div>
    )
}
