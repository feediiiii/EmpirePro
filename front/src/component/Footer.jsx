import React from 'react'
import "../index.css"

const Footer = () => {
  return (
    
    <footer className='flex mx-0 mt-[170px] pt-[70px] pb-[70px] w-auto bg-gray-gradient bg-opacity-20 rounded-xl '>
        <div className="absolute z-0 w-[40%] h-[30%] top-0 left-0 pink__gradient"></div>
            <div className='flex mx-auto sm:space-x-0 md:space-x-20 backdrop-blur-md'>
                <div className='hidden sm:hidden md:block flex-row  sm:space-y-1 md:space-y-8  font-poppins'>
                        <div><a href="">Adress Email : </a> </div>
                        <div> <a href=""> Phone Number : </a> </div>
                        <div> <a href=""> Linkdin : </a> </div>
                </div>
                <div className='space-y-8 font-poppins'>
                    <div className= 'flex items-center justify-center hover:bg-slate-700/50 bg-opacity-200 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="" className='transition duration-200 ease-in-out transform hover:scale-105'> fediguizeniedu@gmail.com</a> </div>
                    <div className= 'flex items-center justify-center hover:bg-slate-700/50 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="" className='transition duration-200 ease-in-out transform hover:scale-105'> +216  51 99 51 42 </a> </div>
                    <div className= 'flex items-center justify-center bg-transparent hover:bg-slate-700/50 transition duration-300 ease-in-out h-auto rounded-xl px-[20px]'> <a href="https://www.linkedin.com/in/fedi-guizeni/"  className='transition duration-200 ease-in-out transform hover:scale-105'> https://www.linkedin.com/in/fedi-guizeni/  </a> </div>
                </div>
              

         </div>
    </footer>

  )
}

export default Footer