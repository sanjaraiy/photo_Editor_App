import React from 'react'
import NavBar from './NavBar'
import SlideBar from './SlideBar'

function Main() {
  return (
    <div>
         <div className='flex flex-col'>
           <div>
             <NavBar></NavBar>
           </div>
             <SlideBar></SlideBar>
         </div>
    </div>
  )
}

export default Main