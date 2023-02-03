import React ,{useRef}from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import {MdOutlineEmail}  from 'react-icons/md'
import {RiMessengerLine}  from 'react-icons/ri'


const Contact = () => {

  const form=useRef();

  const sendEmail = (e)=>{
    e.preventDefault();

    emailjs.sendForm('service_8a3io95','template_8luxw54', form.current, 'EysGQs_6L2kbhowjo')
    e.target.reset();
  }

  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>surajkumar2799@gmail.com</h5>
            <a href="mailto:surajkumar2799@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+916393471415</h5>
            <a href="https://api.whatsapp.com/send?phone+918577801977" target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' required placeholder='Your full name' />
          <input type="email" name='email' required placeholder='Your email id' />
          <textarea name="message" id=""  placeholder='Your message' required rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact