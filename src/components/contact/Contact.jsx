import React, {useRef} from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com';
import contactMe from '../../data/contact';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_85uibnk', 'template_1lbomd4', form.current, 'zA1JGWUqh79TFaDA2')
    .then((result) => {
      alert("Message Sent. I will get in touch soon. Thank you!");
    }, (error) => {
      console.log(error.text);
    });

    e.target.reset();
  };


  const em = 'mailto:' + contactMe.email;
  const wL = 'https://api.whatsapp.com/send?phone=' + contactMe.phone;

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>{contactMe.email}</h5>
            <a href={em} target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+{contactMe.phone}</h5>
            <a href={wL} target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact