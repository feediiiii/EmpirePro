import React from 'react'
import css from '../style'
import img1 from '../assets/Me and Marushhh.png'

const Carousel = ({img}) => {
  return (
    
    <div className='flex-row md:flex  h-auto  w-auto bg-black-gradient rounded-xl  justify-start'>
       
        <div className='flex justify-start transition duration-200 ease-in-out transform hover:scale-105'>
            <div className='bg-green-gradient absolute h-[30px] w-[200px] rounded-md  p-[10px] flex items-center justify-center '>
                <h3 className={`font-poppins font-semibold text-black    `}> Click to see more</h3>
            </div>
        </div>

    <div className=' flex h-[300px] w-auto md:ml-[50px] ml-[0px] mt-[30px] md:mt-[0px] justify-center items-center '>
            <div className= 'bg-black flex w-[200px] h-[200px] md:w-[150px] md:h-[150px]  rounded-full text-center justify-center items-center '>
                <img src={img} className="flex rounded-full w-[300px] h-[300px] md:w-[150px] md:h-[150px]  object-cover transition duration-200 ease-in-out transform hover:scale-110 text-center justify-center items-center  hover:border-2 border-x-green-300 "/>
            </div>
    </div>
        <div className=' w-[100%] flex justify-start items-center p-[30px] transition duration-200 ease-in-out transform hover:scale-105'>
            <p className={`font-poppins font-normal text-dimWhite sm:text-[18px] xl:text-[12px] leading-[30.8px] `}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eaque expedita ut inventore eveniet aspernatur! Possimus recusandae enim explicabo dignissimos sint dolore obcaecati, exercitationem reiciendis natus earum dicta, in fugit?</p>
        </div>
        
    </div>
  )
}

export default Carousel