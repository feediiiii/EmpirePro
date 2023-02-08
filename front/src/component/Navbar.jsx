import React from 'react'
import navBarComp from "./dummyData.js"
import logo from "../assets/verify.png"
import menu from "../assets/menu (1).png"
import cross from "../assets/cross.png"
import { useState } from 'react'

const Navbar = () => {

const [toggle,setToggle] = useState(false)

  return (
    <nav className='w-full flex py-6 justify-between item-center navbar h-[100px]'>
        <img src={logo} className="w-[35px] h-[35px]" alt={"The logo"}/>
        <ul className='list-none justify-end sm:flex hidden item-center font-poppins font-normal cursor-pointer flex-1'>
            {navBarComp.map((element,index)=>{
                return (
                    <li className={`${navBarComp.length-1===index? 'mr-0' : 'mr-20'}`} key={element.title}><a href={element.URL}> {element.title} </a></li>
                )
            })}
        </ul>
        
        {!toggle?<img src={menu} className={'sm:hidden w-[35px] h-[35px]'} onClick={()=>setToggle((prev)=>!prev)}/>:<img src={cross} className={'sm:hidden w-[35px] h-[35px]'}  onClick={()=>setToggle((prev)=>!prev)}/>}

        <div className={`${toggle ?'flex' : 'hidden'} sm:hidden p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] sidebar rounded-xl`} >
            {navBarComp.map((element,index)=>{
                return (
                    <li key={index} className={`list-none ${index===navBarComp.length-1?'mr-0':'mr-10'}`}><a href={element.URL}> {element.title}  </a></li>
                )
            })}
        </div>

    </nav>
  )
}

export default Navbar