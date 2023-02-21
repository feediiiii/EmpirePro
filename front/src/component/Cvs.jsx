import React from 'react'
import cvimg from '../assets/cv.png'
import coverletter from '../assets/coverletter.png'

const Cvs = () => {
  return (
    <>

    <div className='grid md:grid-cols-2 space-y-3 md:space-x-3 md:space-y-0 items-center  mt-[10px]   mb-[100px] justify-center w-auto '>
             
            <div className={'overflow-hidden flex-row  shadow-white rounded-xl  w-[180px] h-[280px] md:w-[250px] md:h-[300px] hover:border-2 border-x-green-300 '}>

                <div className='  h-[50%]'>
                  <img src={cvimg} alt="" />
                </div>
                <div className=' backdrop-blur-xl bg-slate-900/10 h-[50%] '>

                </div>

            </div>


            <div className={'overflow-hidden shadow-white bg-gray-gradient ml-0 w-[180px] h-[280px] md:w-[250px] md:h-[300px] rounded-xl hover:border-2 border-x-green-300'}>
                <div className='  h-[50%]'>
                      <img src={coverletter} alt="" />
                </div>
                <div className=' backdrop-blur-xl bg-slate-900/10 h-[50%] '>

                </div>
            </div>

    </div>
    </>
  )
}

export default Cvs