import React from 'react'
import "./shu.css"
import Navbar from '../Navbar'
import Navbarl from '../Navbarl'
import Agenda from '../agenda/Agenda'
import body from '../Body'
import Body from '../Body'
export default function Shu() {
  return (
    <>
    <Navbar/>
    
    <div className="schedule">
      <div className="sidbar">
        <Navbarl/>
       </div> 
   <div className="cio">
    <Body/>
   </div>
        
    </div>
  
</>

  )
}
