import React, { useState } from 'react'

export default function Menubar() {

  const[view,setview]=useState(false)

  function change(){ 
    setview(!view)
}
  return (
    <div >
      <div id='portfolio'>
        <h2><i>PORTFOLIO</i></h2>

        <div id='menu'>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skill">SKILLS</a></li>
                <li><a href="#project1">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>

        <i class="fa-solid fa-bars" id="toggle" onClick={change}></i>
        </div>

        {view && (<div id='menu1'>
            <ul>
                <li><a href="#home">HOME</a></li>
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#skill">SKILLS</a></li>
                <li><a href="#project1">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>

        )}
    </div>
  )
}
