import React from 'react'
import css from '../style.js'

const GetStarted = () => {
  return (
    <div className={`${css.flexCenter} w-[140px] h-[140px] rounded-full bg-black-gradient justify-center items-center`}>
        <h1 className={'font-poppins font-semibold ss:text-[20px] text-green'} >Get Started</h1>
    </div>
  )
}

export default GetStarted