import React from 'react'
// import { FaLinkedinIn } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";
import './reachOut.scss'
import { TextInput } from './TextInput';

export const ReachOut = () => {
const form = useRef();
  const [done, setDone] = useState(false)
  // const theme = useContext(ThemeContext);
  // const darkMode = theme.state.darkMode;
const [name, setName] = useState('')
const [subject, setSubject] = useState('')
const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setDone(false)

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
      e.target.reset()
      setName('');
      setEmail('');
      setSubject('');

  }

  return (
    <>
      <a id='reach-out-section' />
      <h1>reach out 💬</h1>
  
      <div className="form-container">
 
        <form ref={form} onSubmit={handleSubmit}>
          <TextInput label="Name" name="user_name" value={name} setValue={setName}/>
          <TextInput label="Subject"name="subject" value={subject} setValue={setSubject} />
          <TextInput label="Email"name="user_email" value={email} setValue={setEmail}/>
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
