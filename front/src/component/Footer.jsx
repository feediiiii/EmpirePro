import React from 'react'
import "../index.css"

const Footer = () => {
  return (
    
    <footer className='flex mx-0 mt-[30px] pt-[70px] pb-[70px] w-auto bg-gray-gradient bg-opacity-20 rounded-xl '>
        <div className="absolute z-0 w-[40%] h-[30%] top-0 left-0 pink__gradient"></div>
            <div className='flex mx-auto sm:space-x-0 md:space-x-20 backdrop-blur-md'>
                <div className='hidden sm:hidden md:block flex-row  sm:space-y-1 md:space-y-8  font-poppins'>
                        <div><a href="">Adress Email : </a> </div>
                        <div> <a href=""> Phone Number : </a> </div>
                        <div> <a href=""> Linkdin : </a> </div>
                </div>
                <div className='space-y-8 font-poppins '>
                    <div className= 'flex items-center justify-center hover:bg-slate-700 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="" className='transition duration-200 ease-in-out transform hover:scale-105'> fediguizeniedu@gmail.com</a> </div>
                    <div className= 'flex items-center justify-center hover:bg-slate-700 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="" className='transition duration-200 ease-in-out transform hover:scale-105'> +216  51 99 51 42 </a> </div>
                    <div className= 'flex items-center justify-center bg-transparent hover:bg-slate-700 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="https://www.linkedin.com/in/fedi-guizeni/"  className='transition duration-200 ease-in-out transform hover:scale-105'> https://www.linkedin.com/in/fedi-guizeni/  </a> </div>
                </div>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="black" strokeWidth="2">
  <path d="M 12 4 L 12 20 M 8 12 C 8 9.79086 9.79086 8 12 8 C 14.20914 8 16 9.79086 16 12 C 16 14.20914 14.20914 16 12 16 C 9.79086 16 8 14.20914 8 12 Z" />
</svg>

         </div>
    </footer>

  )
}

export default Footer