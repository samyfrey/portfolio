import React from 'react'
// import { FaLinkedinIn } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import './reachOut.scss'

export const ReachOut = () => {
const form = useRef();
  const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
        "service_i83oaqo",
        "template_ij939mb",
        form.current,
        "vEpHfamcj0V-1LcYD"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <a id='reach-out-section' />
      <h1>reach out 💬</h1>
  
      <div className="form-container">
 
        <form ref={form} onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" name="user_name" />
              <input type="text" placeholder="Subject" name="user_subject" />
              <input type="text" placeholder="Your Email" name="user_email" />
              <textarea rows="5" placeholder="type your message here" name="message" />
              {done ? 'sent. thank you!' : <button data-progress-text='uploading'>Submit</button>}
          </form>
        {/* <a href='#'>
          <FaLinkedinIn />
        </a> */}
      </div>
    </>

  )
}
