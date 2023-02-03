import React from 'react'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {VscFolderLibrary} from 'react-icons/vsc';
import {HiUsers} from 'react-icons/hi';
import './About.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>6+ month working</small>
            </article>
            <article className="about__card">
              <HiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p> Hi there, I'm suraj with few month Experience in web development. 
            I love the challenge of finding a way 
            and discovering solutions. I love my work and enjoy each new project as i get it. Feel free to have a look 
            at my portfolio and don't hessitate to contact me if you think i can be of service to you. 
            Thanks for stopping by !
          </p>
          

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About