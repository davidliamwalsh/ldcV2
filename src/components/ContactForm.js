import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import FlashMessage from 'react-flash-message'

const ContactForm = () => {

  const [submitted, setSubmitted] = useState()
  const [failed, setFailed] = useState()

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, e.target, `${process.env.REACT_APP_EMAILJS_USERID}`)
      .then((result) => {
          console.log(result.text)
          setSubmitted(true)
          console.log(submitted)
      }, (error) => {
          console.log(error.text)
          setFailed(true)
          console.log(failed)
      })
      e.target.reset()
  }

  return <>
    { submitted ? <FlashMessage duration={3000}>
      {<div className='c-contact-form__message'>Thanks for your message, I'll get back to you soon</div> }
      </FlashMessage> : ''
    }
    { failed ? <FlashMessage duration={3000}>
        {<div className='c-contact-form__message'>Whoops... something went wrong, please try again</div> }
      </FlashMessage> : ''
    }
    <div className="c-container">
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="c-contact-form">
          <label className="c-contact-form__body--label">Name</label>
          <input type="text" name="name" className="c-contact-form__name--input" />
          <label className="c-contact-form__body--label">Email</label>
          <input type="email" name="email" className="c-contact-form__name--input" />
          <label className="c-contact-form__body--label">Message</label>
          <textarea name="message" rows="10" className="c-contact-form__body--input" placeholder="Please type your message" />
        </div>
        <input type="submit" value="Send" className="c-contact-form__submit" />
      </form>
    </div>
  </>
}

export default ContactForm