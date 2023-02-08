import React from 'react'
import css from '../style.js'
import img1 from '../assets/percent (1).png'
import { useState , useEffect} from 'react'

const UnderNav = () => {
    
    const [numGen,setNumGen]=useState(1145)

    const NumberGenerator=()=>{
        setNumGen((prev)=>prev+1);
    }


    useEffect(() => {
        const intervalId = setInterval(NumberGenerator, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [numGen]);


  return (

    <section className={`${css.paddingY} flex flex-col items-start`}>
        <div className={`${css.flexStart} items-start bg-discount-gradient rounded-[10px] mb-[20px] p-[10px]`}>
            <div className=' flex flex-row'>
                <img src={img1} className={`w-[20px] h-[20px] items-start `}/><span className='ml-[10px] font-poppins'>Discount in our </span>
                <span className='ml-[10px] font-medium text-green font-bold'>{numGen}</span><span className='ml-[10px] font-poppins'> Product </span>
            </div>
        </div>
    </section>
  )
}

export default UnderNav