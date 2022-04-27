import React from 'react'
import "./project.scss"

export const Project = ({ img, link, title, description, text, tech, github, demo }) => {
  return (
    <>
    <div className='project-screen'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer" >
        <img src={img} alt='' className='p-img' />
      </a>
    </div>
    <div className='project-legend'>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{text}</p>
      <p>{tech}</p>
      <h4>
					<a href={github} target="_blank" rel="noreferrer">learn more</a>
					<a href={demo} target="_blank" rel="noreferrer">live demo</a>
      </h4>
    </div>'
    </>
  )
}
