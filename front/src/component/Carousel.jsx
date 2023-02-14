import React from 'react'
import css from '../style'
import img1 from '../assets/Me and Marushhh.png'

const Carousel = () => {
  return (
    
    <div className='flex h-[300px] bg-black-gradient rounded-xl  justify-start'>
    <div className=' flex h-[300px] w-[300px] justify-center items-center '>
            <div className= 'bg-black flex w-[150px] h-[150px]  rounded-full text-center justify-center items-center'>
                <img src={img1} className="rounded-full  w-[150px] h-[150px] object-cover transition duration-200 ease-in-out transform hover:scale-110"/>
            </div>
    </div>
        <div className=' w-[100%] flex justify-start items-center p-[30px] transition duration-200 ease-in-out transform hover:scale-105'>
            <p className={`font-poppins font-normal text-dimWhite sm:text-[18px] xl:text-[12px] leading-[30.8px] `}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque eaque expedita ut inventore eveniet aspernatur! Possimus recusandae enim explicabo dignissimos sint dolore obcaecati, exercitationem reiciendis natus earum dicta, in fugit?</p>
        </div>
        <div className='flex justify-end transition duration-200 ease-in-out transform hover:scale-105'>
            <div className='bg-green-gradient absolute h-[30px] w-[200px] rounded-md  p-[10px] flex items-center justify-center '>
                <h3 className={`font-poppins font-semibold text-black    `}> Click to see more</h3>
            </div>
        </div>
    </div>
  )
}

export default Carousel