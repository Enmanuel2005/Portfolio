import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from './contact.module.css'

const Contact = () => {

  const formRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const emailRef = useRef();

  const sendEmail = (e) => {

    emailjs.init("DX3a4GDcYgfbHOB3h")
    
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const serviceID = "service_699iw99";
    const templateID = "template_ogvco7n";

    const paramsEmail = {
      myName: 'Enmanuel Zorrilla Pimentel',
      name: name,
      email: email,
      message: message
    }

    emailjs.send(serviceID, templateID, paramsEmail)
      .then((response) => {
        console.log("Correo enviado", response);
        nameRef.current.value = ''
        emailRef.current.value = ''
        messageRef.current.value = ''
      })
      .catch((error) => {
        console.log("Error", error);
      })
  }

  return (
    <div className={styles.contact_container}>
      <div className={styles.tittle_contact_container}>
        <h2>Contact Me</h2>
      </div>
      <form className={styles.contact_inputs_container} ref={formRef} onSubmit={sendEmail}>
        <div className={styles.dataInputs}>
          <input type="text" placeholder='Name' ref={nameRef} />
          <input type="text" placeholder='Email' ref={emailRef} />
        </div>
        <div className={styles.textareaButton}>
          <textarea name="" id="" cols="30" rows="10" placeholder='Write your message here!' ref={messageRef}></textarea>
          <button className={styles.contactButton}>Send</button>
        </div>
      </form>
      <div className={styles.links_buttons}>
        {/* <img className={styles.webs_links_git} src="/end_menu_images/github_link_logo.svg" alt="" style={{ width: "40px" }} />
        <img className={styles.webs_links_linkedin} src="/end_menu_images/linkedin_link_logo.svg" alt="" style={{ width: "40px" }} /> */}
      </div>
    </div>
  )
}

export default Contact
