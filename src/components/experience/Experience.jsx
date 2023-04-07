import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container container__experience">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>HTML</h5>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>CSS</h5>
                <small className='text-light'>Intermediate</small>
              </article><article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>JavaScript</h5>
                <small className='text-light'>Experienced</small>
              </article><article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>Bootstrap</h5>
                <small className='text-light'>Experienced</small>
              </article><article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>Tailwind</h5>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>React</h5>
                <small className='text-light'>Experienced</small>
              </article>
          </div>

        </div>

        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>Node JS</h5>
                <small className='text-light'>Experienced</small>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>MongoDB</h5>
                <small className='text-light'>Intermediate</small>
              </article><article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>PHP</h5>
                <small className='text-light'>Intermediate</small>
              </article><article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>MySQL</h5>
                <small className='text-light'>Basic</small>
              </article><article className='experience__details'>
                <BsPatchCheckFill/>
                <h5>Python</h5>
                <small className='text-light'>Experienced</small>
              </article>
          </div>
          
        </div>

      </div>
    </section>
  )
}

export default Experience