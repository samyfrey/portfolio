import React from 'react'
import "./projects.scss"
import { Project } from '../project/Project'

export const Projects = () => {
  return (
    <div className='pl'>

    <p className='projects-intro'>Selection of my most recent projects. Please **Link** reach out if you have any questions</p>
    <div className='pl-list'>
        <Project />    
        <Project />    
        <Project />    
    </div>
    </div>
  )
}
