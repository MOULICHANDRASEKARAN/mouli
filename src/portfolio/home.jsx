import React from 'react'
import images from "../images/mouli .jpg"

export default function Home() {
  
  return (
    <div>
        <div id="home">
            <img src={images} alt="MOULI" id='image'/>
            <div id='content'>
                <h4>HI!....THIS IS MOULI C </h4>
                <h5> a <span>MERN stack developer</span>,</h5>
                <p>I am a web developer and I am a fresher. I'm passionate about staying updated
                with latest trends and technologies in web development.</p>
                <button><a href="http://wa.me/919344052411">CONNECT WITH ME</a></button>
            </div>
        </div>
    </div>
  )
}
