import React from 'react'
import { useState } from 'react'
import "../index.css"

import linkedin from "../assets/linkedin.png"
import email from "../assets/email.png"
import phone from "../assets/phone-call.png"

const Footer = () => {

  const [hovered,setHovered]=useState(false)

  return (
    
    <footer className='flex bg-black text-white mx-0 mt-[0px] pt-[70px] pb-[70px] w-full bg-blackk-gradient '>
        <div className="absolute z-0 w-[40%] h-[30%] top-0 left-0 pink__gradient "></div>
            <div className='flex mx-auto sm:space-x-0 md:space-x-20 backdrop-blur-md'>

                <div className='hidden sm:hidden md:block flex-row  sm:space-y-1 md:space-y-8  font-poppins'>
                        <div><a href="">Adress Email : </a> </div>
                        <div> <a href=""> Phone Number : </a> </div>
                        <div> <a href=""> Linkdin : </a> </div>
                </div>
                <div className='hidden md:block space-y-8 font-poppins '>
                    <div className= 'flex items-center justify-center hover:bg-slate-700/50 bg-opacity-200 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="" className='transition duration-200 ease-in-out transform hover:scale-105'> fediguizeniedu@gmail.com</a> </div>
                    <div className= 'flex items-center justify-center hover:bg-slate-700/50 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="" className='transition duration-200 ease-in-out transform hover:scale-105'> +216  51 99 51 42 </a> </div>
                    <div className= 'flex items-center justify-center bg-transparent hover:bg-slate-700/50 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="https://www.linkedin.com/in/fedi-guizeni/"  className='transition duration-200 ease-in-out transform hover:scale-105'> https://www.linkedin.com/in/fedi-guizeni/  </a> </div>
                </div>
                
              <div className={`block md:hidden w-auto backdrop-blur-lg ${hovered? "bg-white/50" :"bg-white/50"}  p-[20px] rounded-full justify-start`}>
                <div className='block md:hidden space-y-5'>
                
                      <img src={email} alt="" className='h-[50px] hover:scale-110 ease-in-out duration-150 cursor-pointer' onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}/>
              
                      <img src={phone} alt="" className='h-[50px] hover:scale-110 ease-in-out duration-150 cursor-pointer' onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}/>
                      <img src={linkedin} alt="" className='h-[50px] hover:scale-110 ease-in-out duration-150 cursor-pointer' onMouseEnter={()=>{setHovered(true)}} onMouseLeave={()=>{setHovered(false)}}/>
                  </div>
                </div>
              

         </div>
    </footer>

  )
}

export default Footer