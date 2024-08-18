import React from 'react'
import './Profile.css'
import img from './temp/profile1.JPG'
export default function Profile() {
  return (
    <>
        <div className='container prof mt-5'>
          <div className='card card1'>
          <div className='row mt-5 mb-5'>
            <div className='col-lg-7 col-md-6 col-sm-12 mt-5 mb-3'>
              <center>
              <h1 className='text-light mt-3'>Hi 👋,</h1>
              <h1 className='text-light'>I'm Premsai,</h1>
              <h2 className='text-light'>Front-end Web Developer</h2>
              </center>
              <p className='para mt-3 ms-3  ms-md-5'>I am a tech enthusiast and a self-driven learner with a strong
                 passion for creating experiences that simplify people’s lives 
                 through web applications. My expertise covers across
                  design and development, working with tools and technologies
                   such as HTML5, CSS3, Bootstrap, JavaScript and React. I possess a solid grasp of data structures and 
                    algorithms, and I'm constantly eager to explore and stay
                     updated with emerging technologies.</p>
              
            </div>
            <div className='col-lg-5 col-md-6 col-sm-12 mt-5'>
              <end>
              <img className='img-fluid' id='profile' src={img} width={350} />
              </end>
            </div>

          </div>
          </div>
        </div>
    </>
  )
}
