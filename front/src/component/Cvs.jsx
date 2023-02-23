import React from 'react'
import cvimg from '../assets/cv.png'
import download1 from '../assets/download1.png'
import coverletter from '../assets/coverletter.png'

const Cvs = () => {
  return (
    <>

    <div className='grid md:grid-cols-2 space-y-3 md:space-x-20 md:space-y-0 items-center  mt-[10px]   mb-[100px] justify-center w-auto '>
             
            <div className={'overflow-hidden flex-row  shadow-white rounded-xl  w-[180px] h-[280px] md:w-[250px] md:h-[300px] hover:border-2 border-x-green-300 '}>

                <div className='  h-[50%]'>
                  <img src={cvimg} alt="" />
                </div>
                <div className=' flex mx-0 backdrop-blur-xl bg-slate-900/10 h-[50%] items-center justify-center '>
                    <div className='flex-row mx-0'>
                        <h3 className='text-center drop-shadow-xl'> My Cv for downloading </h3>
                        <div className='flex mt-[20px]'>
                           <img src={download1} alt="loading" className='h-[40px] mx-auto hover:bg-blue-gradient hover:scale-110 ease-linear duration-150 cursor-pointer' />
                        </div>
                       
                    </div>
                </div>

            </div>


            <div className={'overflow-hidden flex-row shadow-white bg-gray-gradient ml-0 w-[180px] h-[280px] md:w-[250px] md:h-[300px] rounded-xl hover:border-2 border-x-green-300'}>
                <div className='  h-[50%]'>
                      <img src={coverletter} alt="" />
                </div>
                <div className=' flex mx-0 backdrop-blur-xl bg-slate-900/10 h-[50%]  items-center justify-center '>
                  <div className='flex-row mx-0'>
                        <h3 className='text-center drop-shadow-xl'> My Cover letter for downloading </h3>
                        <div className='flex mt-[20px]'>
                           <img src={download1} alt="loading" className='h-[40px] mx-auto hover:bg-blue-gradient hover:scale-110 ease-linear duration-150 cursor-pointer' />
                        </div>
                       
                    </div>
                </div>
            </div>

    </div>
    </>
  )
}

export default Cvs