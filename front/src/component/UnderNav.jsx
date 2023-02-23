import React from 'react'
import css from '../style.js'
import img1 from '../assets/eye.png'
import { useState , useEffect} from 'react'
import GetStarted from './GetStarted.jsx'

const UnderNav = () => {
    
    const [numGen,setNumGen]=useState(5)

    const NumberGenerator=()=>{
        setNumGen(Math.floor(Math.random() * 30) + 1);
    }


    useEffect(() => {
        const intervalId = setInterval(NumberGenerator, 5000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [numGen]);


  return (
<>
    
    <section className={`${css.paddingY} flex flex-col items-start`}>
        <div className={`${css.flexStart} items-start bg-discount-gradient rounded-[10px] mb-[20px] p-[10px]`}>
            <div className=' flex flex-row'>
                <span className='ml-[10px] font-medium text-green font-bold'>{numGen}</span><span className='ml-[10px] font-poppins'> People visiting the website </span>
                <img src={img1} className={`w-[30px] h-[30px] ml-[10px] `}/>
            </div>
            
            
        </div>

        <div className="flex flex-row item-center flex-2 ">
                <h1 className=' font-poppins font-semibold text-[50px] ss:text-[60px]'>
                    Fedi Guizeni </h1>
                    <br/>
                    <span className='text-green font-poppins font-semibold  ss:text-[35px] text-[30px] ml-[30px]'> Full Stack Web and Mobile application developer </span>
                
                
                <div className={"ss:flex hidden md:mr-[10px] w-[300px] place-content-end"}>
                    <div className={`hidden md:block justify-center ${css.flexCenter} ml-[100px]  hover:bg-blue-gradient hover:scale-110 ease-linear duration-150 cursor-pointer `}>
                        <GetStarted/>
                    </div>
                </div>
            </div>
                <p className={`${css.paragraph} mt-[20px]`}>
                I’am Fedi guizeni,
                    I'am recently gradueted from RBK and I choose this field
                    of studying because I’ve been always interested and
                    passionate about computer and technologies from my
                    early beginning.
                    And I m hoping to develop myself more, Improving and
                    applying my current ordinary knowledge in the IT world.
                </p>
            
    </section>
    </>
  )
}

export default UnderNav