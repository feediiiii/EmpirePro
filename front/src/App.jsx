import React from 'react'
import GetStarted from './component/GetStarted.jsx'
import Navbar from './component/Navbar.jsx'
import UnderNav from './component/UnderNav.jsx'
import css from './style.js'

const App = () => {
  return (
    <div className='bg-primary text-white sm:px-16 px-6'>
        <div className="absolute z-0 w-[40%] h-[30%] top-0 left-0 pink__gradient"></div>
        <div className={`${css.boxWidth} z-1`}>
          <Navbar/>
        </div>
      

      <div className={`bg-primary  ${css.flexStart}`}>
        <div className={`${css.boxWidth} sm:mt-[50px] mt-[100px]`}>
            <UnderNav/>
        </div>
      </div>

     
      <div className={`bg-primary  ${css.flexCenter} justify-center items-center`}>
        <div className={`${css.boxWidth} sm:mt-[50px] mt-[30px] justify-center items-center`}>
              <GetStarted/>
          </div>
      </div>

      <div className={` font-poppins ${css.flexCenter} `}>

          <div className='items-center flex mt-[50px] flex-col sm:flex-row md:m-[40px] space-x-20  mb-[100px] justify-around '>
            <div className={'shadow-white bg-gray-gradient  rounded-xl    w-[250px] h-[200px]  hover:border-2 border-x-green-300 '}>
                
            </div>
            <div className={'shadow-white bg-gray-gradient w-[250px] h-[200px] ] rounded-xl hover:border-2 border-x-green-300'}>

            </div>
            <div className={'shadow-white bg-gray-gradient w-[250px] h-[200px]  rounded-xl hover:border-2 border-x-green-300'}>

            </div>
          </div>

      </div>


    </div>
  )
}

export default App
