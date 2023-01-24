import React from 'react'
import "./FormStyle.css"

const Form = () => {
  return (
    <div className="form">
      <form action="">
        <label>Name</label>
        <input type="text" placeholder='Your Name'></input>
        <label>Email</label>
        <input type="email" placeholder='Email Address'></input>
        <label>Project Description</label>
        <textarea rows="6" placeholder='Project Description'></textarea>
        <button className="btn">Send Message</button>
      </form>
    </div>
  )
}

export default Form