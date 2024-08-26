import React from 'react'
import images from "../images/calculator.jpg"
import images1 from"../images/expense.jpg"

export default function Project() {
    
  return (
    <div id='project1'>
        <h4>PROJECT</h4>
        <div class="project">
        <div id='calculator'>
            <h5>CALCULATOR</h5>
            <img src={images} alt="" id='cal'/>
            <h6>Description:</h6>
            <p>The calculator features a simple yet effective interface. Each button press updates the display, showing the current calculation or result.The JavaScript logic ensures that calculations are accurate.</p>
            <h6>Tools used:</h6>
            <p>HTML,CSS,JAVASCRIPT,REACT</p>
            <button><a href="https://react-calculator-by-mouli.netlify.app/">Click to view</a></button>
        </div>

        <div id="calculator">
            <h5>MONEY MANAGER</h5>
            <img src={images1} alt="" id='cal'/>
            <h6>Description:</h6>
            <p>In this project I have used React for the front end and Axios for API calls, the app fetches data from a mock API and dynamically calculates the total balance, income, and expenses.</p>
            <h6>Tools used:</h6>
            <p>HTML,CSS,JAVASCRIPT,REACT,MOCK API</p>
            <button><a href="https://expenses-app-by-mouli.netlify.app/">Click to view</a></button>

        </div>
        </div>
        
    </div>
  )
}
