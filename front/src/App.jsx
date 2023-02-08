import React from 'react'
import Navbar from './component/Navbar.jsx'
import UnderNav from './component/UnderNav.jsx'
import css from './style.js'

const App = () => {
  return (
    <div className='bg-primary text-white sm:px-16 px-6'>
    
        <div className={`${css.boxWidth}`}>
          <Navbar/>
        </div>
      

      <div className={`bg-primary  ${css.flexStart}`}>
        <div className={`${css.boxWidth}`}>
            <UnderNav/>
        </div>
      </div>


    </div>
  )
}

export default App
