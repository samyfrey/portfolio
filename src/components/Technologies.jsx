import React from 'react'
import './Technologies/technologies.scss'
export const Technologies = () => {
  return (
      <div className='divider'>
        <h1>technologies & skills  🛠</h1>

        <div className='tech-list'>
          <a href='/'>react</a>
          <a href='/'>javascript ES6+</a>
          <a href='/'>material UI</a>
          <a href='/'>jQuery</a>
          <a href='/'>bootstrap</a>
        </div>
        <div className='tech-list'>
          <a href='/'>express</a>
          <a href='/'>mongoDB</a>
          <a href='/'>mongoose</a>
          <a href='/'>axios</a>
          <a href='/'>passport</a>
          <a href='/'>socket.io</a>
          <a href='/'>python</a>
          <a href='/'>django</a>
        </div>
        <div className='tech-list'>
          <a href='/'>MVC</a>
          <a href='/'>data manipulation</a>
          <a href='/'>agile</a>
          <a href='/'>github</a>
          <a href='/'>scrum</a>
          <a href='/'>jira</a>

        </div>


      </div>
  )
}
