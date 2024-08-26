import React from 'react'

export default function Skill() {
    let width = "85%"
    let width1 = "75%"
    let width2 = "70%"
    let width3 = "72%"
    let width4 = "74%"
    let width5="75%"
    let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxeNFO8PSlvOvudmrtLIOYdTpN6o77VKolQ&s"
    let img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBv-5jg3Zh_KECwn2hw0Nw08TgZOZNT3kv2A&s"
    let img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGAZHt3yy1soOlqVYuwl5KHeSH1R3E5TMLZw&s"
    let img4 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1TJmVu_nXU0NXkLWNlJT2Xxs-wPfWsYvIzQ&s"
    let img5 = "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
    let img6 = "https://tse2.mm.bing.net/th?id=OIP.5gf2JQQmWla-GU-WXTrGcgHaE8&pid=Api&P=0&h=180"
    return (
        <div id='skill'>
            <h4>SKILLS</h4>

            <div id='skillset'>
                <div class="html">
                    <h5>HTML</h5>
                    <img src={img1} alt="" class="img" />
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: width }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>
                    <ul>
                        <li>Skilled in writing clean, semantic HTML markup that enhances accessibility</li>
                        <li>Experience in creating forms with appropriate input types, labels, and form validation using HTML attributes.</li>
                    </ul>

                </div>

                <div class="html">
                    <h5>CSS</h5>
                    <img src={img2} alt="" class="img" />
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: width1 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                    <ul>
                    <li>Proficient in designing responsive layouts using media queries and frameworks like Bootstrap .</li>
                    <li>Knowledgeable in using CSS Flexbox and Grid layout for efficient page structuring and alignment.</li>
                    </ul>

                </div>

                <div class="html">
                    <h5>JAVASCRIPT</h5>
                    <img src={img3} alt="" class="img" />
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: width2 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>
                    <ul>
                    <li>Strong understanding of JavaScript fundamentals including variables, data types, functions, loops.</li>
                    <li>Ability to manipulate the Document Object Model (DOM) using JavaScript to create interactive web pages.</li>
                    </ul>

                </div>

                <div class="html">
                    <h5>REACT</h5>
                    <img src={img4} alt="" class="img" />
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: width3 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                    <ul>
                    <li>Proficient in managing component state using React's useState and useContext hooks.</li>
                    <li>Proficient in implementing Create, Read, Update, Delete operations to manage data .</li>
                    </ul>

                </div>

                <div class="html">
                    <h5>MONGO DB</h5>
                    <img src={img5} alt="" class="img" />
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: width4 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">82%</div>
                    </div>
                    <ul>
                    <li>Experience with deploying MongoDB on-premises and in cloud environments.</li>
                    <li>Provide detailed descriptions of projects where you've used MongoDB, including the problems you solved and the impact of your solutions.</li>
                    </ul>

                </div>

                <div class="html">
                    <h5>NODE JS</h5>
                    <img src={img6} alt="" class="img" />
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: width5 }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                    <ul>
                    <li>Uses JavaScript for both client-side and server-side development.</li>
                    <li>Ideal for building real-time applications like chat apps, gaming servers, and live-streaming services.</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}
