import React from 'react'
import css from '../style'
import img1 from '../assets/Me and Marushhh.png'

const Carousel = ({img,title,paragraph}) => {
  return (
    
    <div className='flex-row md:flex  h-auto  w-auto bg-blackAndWhite-gradient bg-opacity-10 rounded-xl  justify-start backdrop-blur-xl'>
        <div className='flex justify-start transition duration-200 ease-in-out transform hover:scale-105'>
            <div className='bg-green-gradient absolute h-[30px] w-[200px] rounded-md  p-[10px] flex items-center justify-center '>
                <h3 className={`font-poppins font-semibold text-black`}> Click to see more</h3>
            </div>
        </div>
       

        <div className=' flex h-[300px] w-auto md:ml-[50px] ml-[0px] mt-[30px] md:mt-[0px] justify-center items-center '>
                <div className= ' flex w-[200px] h-[200px] md:w-[150px] md:h-[150px]  rounded-full text-center justify-center items-center '>
                    <img src={img} className="flex object-fill  transition duration-200 ease-in-out transform hover:scale-110 text-center justify-center items-center  hover:rounded-full hover:border-2 border-x-green-300 "/>
                </div>
        </div>

        <div className='flex my-0 items-center justify-center w-auto ml-[30px]'>
             <h1 className='mx-[30px] text-[30px] text-green font-semibold mt-[30px] md:mt-0 font-poppins justify-center items-centers'>{title}</h1>
        </div>

        <div className=' w-[100%] flex justify-start items-center p-[30px] transition duration-200 ease-in-out transform hover:scale-105'>
            <p className={`font-poppins font-normal text-dimWhite sm:text-[18px] xl:text-[12px] leading-[30.8px] `}>{paragraph}</p>
        </div>
        
    </div>
  )
} 

export default Carousel