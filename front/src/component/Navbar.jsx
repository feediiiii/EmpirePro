import React from 'react'
import {navBarComp,projectSlides} from "./dummyData.js"
import logo from "../assets/comp1.png"
import menu from "../assets/menu (1).png"
import cross from "../assets/cross.png"
import { useState } from 'react'

const Navbar = () => {

const [toggle,setToggle] = useState(false)

  return (
    <nav className='fixed top-0 left-[0] right-0 z-50  w-full flex py-6  item-center navbar h-[100px] space-between backdrop-blur-md' >
        <img src={logo} className="w-[111px] h-[68px] ml-[30px]" alt={"The logo"} />
        <div className=' w-[100%]'>
            <ul className='list-none justify-end sm:flex hidden item-center font-poppins font-normal cursor-pointer mr-[30px]'>
                {navBarComp.map((element,index)=>{
                    return (
                        <li className={`${navBarComp.length-1===index? 'mr-0' : 'mr-20'} transition duration-200 ease-in-out transform hover:scale-105`} key={element.title}><a href={element.URL}> {element.title} </a></li>
                    )
                })}
            </ul>
        </div>
        
        {!toggle?<img src={menu} className={'sm:hidden w-[35px] h-[35px] mr-10'} onClick={()=>setToggle((prev)=>!prev)}/>:<img src={cross} className={'sm:hidden w-[35px] h-[35px] mr-10'}  onClick={()=>setToggle((prev)=>!prev)}/>}

        <div className={`${toggle ?'flex' : 'hidden'} sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] sidebar rounded-xl `} >
            {navBarComp.map((element,index)=>{
                return (
                    <li key={index} className={`list-none mx-4 duration-300 hover:transition-colors${index===navBarComp.length-1?'mr-0':'mr-10'} font-Cairo`} ><a href={element.URL} className={` duration-300 hover:transition-colors`}> {element.title} </a></li>
                )
            })}
        </div>

    </nav>
  )
}

export default Navbar