import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.tittle_contact_container}>
        <h2>Contact Me</h2>
      </div>
      <form className={styles.contact_inputs_container}>
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <textarea name="" id="" cols="30" rows="10" placeholder='Write your message here!'></textarea>
      </form>
    </div>
  )
}

export default Contact
