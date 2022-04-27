import React from 'react'
import "./projects.scss"
import { Project } from './Project'
import { projects } from '../../content' 
export const Projects = () => {
  return (
    <div className='divider'>
    <a id='projects-section' />
			<h1>recent projects 🚀</h1>
        <p className='projects-intro'>here's a selection of my most recent projects. <span><a href='#reach-out-section'>reach out</a></span>if you have any questions!</p>
        <div className='projects-list'>
            {projects.map(item => (
              <Project key={item.id} img={item.img} link={item.link} title={item.title} description={item.description} text={item.text} tech={item.tech} github={item.linkGithub} demo={item.linkDemo} />    

            ))}
      
        </div>
    </div>
  )
}
