import React from 'react'
import './about.css'
import img1 from './temp/aboutpic.jpg'
export default function About() {
  return (
    <>
    <div className='about'>
        <div className='container'>
            <div className='row pt-5'>
            <div  className='col-md-6 mt-5'>
                <img src={img1} id="aboutpic" width={900} className='img-fluid' alt='' />
            </div>
            <div className='aboutdiv col-md-5 ms-5 mt-5' >
            <p className='about-text mt-5'>
                I’m Premsai , a passionate tech enthusiast and lifelong learner
                 specializing in data structures and algorithms. Currently pursuing 
                 a Bachelor of Technology in Computer Science and Engineering, I
                  am committed to exploring and mastering emerging technologies.
                   With experience in HTML, CSS, JavaScript, and React, I have 
                   developed dynamic projects such as a responsive tourism website 
                   and a personal portfolio. My ongoing internship at Edugene 
                   Technologies is enhancing my Java programming skills and 
                   understanding of software development. I am eager to contribute
                    to innovative tech solutions and continuously expand my knowledge.
              </p>
            </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
