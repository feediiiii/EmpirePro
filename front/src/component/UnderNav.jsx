import React from 'react'
import css from '../style.js'
import img1 from '../assets/percent (1).png'
import { useState , useEffect} from 'react'
import GetStarted from './GetStarted.jsx'

const UnderNav = () => {
    
    const [numGen,setNumGen]=useState(1145)

    const NumberGenerator=()=>{
        setNumGen((prev)=>prev+3);
    }


    useEffect(() => {
        const intervalId = setInterval(NumberGenerator, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [numGen]);


  return (
<>
    
    <section className={`${css.paddingY} flex flex-col items-start`}>
        <div className={`${css.flexStart} items-start bg-discount-gradient rounded-[10px] mb-[20px] p-[10px]`}>
            <div className=' flex flex-row'>
                <img src={img1} className={`w-[20px] h-[20px] items-start `}/><span className='ml-[10px] font-poppins'>Discount in our </span>
                <span className='ml-[10px] font-medium text-green font-bold'>{numGen}</span><span className='ml-[10px] font-poppins'> Product </span>
            </div>
            
            
        </div>

        <div className="flex flex-row item-center flex-2 ">
                <h1 className=' font-poppins font-semibold text-[50px] ss:text-[60px]'>
                    Check out 
                    <br/>
                    <span className='text-green'> our Collection </span>
                </h1>
                
                <div className={"ss:flex hidden md:mr-[10px] w-[300px] place-content-end"}>
                    <div className={`hidden md:block justify-center ${css.flexCenter} ml-[100px]  hover:cursor-pointer`}>
                        <GetStarted/>
                    </div>
                </div>
            </div>
                <p className={`${css.paragraph} mt-[20px]`}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi minus sunt, eveniet veniam hic debitis libero rerum necessitatibus ab impedit nemo recusandae asperiores quasi blanditiis voluptates quibusdam reiciendis ratione atque?
                </p>
            
    </section>
    </>
  )
}

export default UnderNav