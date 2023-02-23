import React from 'react'
import Carousel from './component/Carousel.jsx'
import GetStarted from './component/GetStarted.jsx'
import Navbar from './component/Navbar.jsx'
import UnderNav from './component/UnderNav.jsx'
import css from './style.js'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';
import { projectSlides } from './component/dummyData.js'

import img1 from './assets/Me and Marushhh.png'
import img2 from './assets/img2.png'
import Footer from './component/Footer.jsx'
import Cvs from './component/Cvs.jsx'
import TimeLine from './component/TimeLine.jsx'


const App = () => {
  return (
    <div className='bg-primary text-white sm:px-16 px-6'>
      <div className="absolute z-0 w-[60%] h-[30%] top-[1500px] left-0 blue__gradient opacity-60"></div>
        <div className="absolute z-0 w-[40%] h-[30%] top-0 left-0  pink__gradient"></div>
        <div className={`${css.boxWidth} z-1`}>
          <Navbar/>
        </div>
      

      <div className={`bg-primary  ${css.flexStart}`}>
        <div className={`${css.boxWidth} sm:mt-[50px] mt-[100px]`}>
            <UnderNav/>
        </div>
      </div>

     
      <div className={`bg-primary  ${css.flexCenter} mx-0 justify-center items-center`}>
        <div className={`flex  justify-center items-center md:hidden hover:scale-110 ease-in-out duration-150 cursor-pointer `}>
              <GetStarted/>
          </div>
      </div>


      <div>
        <h1 className='font-poppins font-semibold text-[30px] ss:text-[40px]'> About Me </h1>
      </div>
      <div className={` font-poppins ${css.flexCenter} w-auto flex mx-0 `}>
         <Cvs/>
      </div>



      <div>
        <h1 className='font-poppins font-semibold text-[30px] ss:text-[40px]'> Projects </h1>
      </div>

      <div className="absolute z-1 w-[40%] h-[30%] top-[1000px] right-0 pink__gradient"></div>
      <div className='h-auto mb-[180px]'>
      <Slider
                dots={true}
                infinite={true}
                speed={1000}
                slidesToShow={3}
                slidesToScroll={1} 
                autoplay={true}
                autoplaySpeed={2000}
                pauseOnHover={true}
                responsive={[
                  { 
                    breakpoint: 2000,
                    settings: {
                      slidesToShow: 1
                    }
                  }
                ]}
              >
                  {projectSlides.map((e)=>{
                    return(
                       <Carousel img={e.img} title={e.title} paragraph={e.paragraph}/>
                    )
                })}
              </Slider>
      </div>


      <div>
        <TimeLine/>
      </div>
      

   
      <Footer/>

      
    </div>
  )
}

export default App
