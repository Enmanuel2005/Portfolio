import React from 'react'
import styles from './contact.module.css'

const Contact = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.tittle_contact_container}>
        <h2>Contact Me</h2>
      </div>
      <form className={styles.contact_inputs_container}>
        <div className={styles.dataInputs}>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
        </div>
        <div className={styles.textareaButton}>
          <textarea name="" id="" cols="30" rows="10" placeholder='Write your message here!'></textarea>
          <button className={styles.contactButton}>Send</button>
        </div>
      </form>
      <div className={styles.links_buttons}>
        <img className={styles.webs_links_git} src="/end_menu_images/github_link_logo.svg" alt="" style={{ width: "40px" }} />
        <img className={styles.webs_links_linkedin} src="/end_menu_images/linkedin_link_logo.svg" alt="" style={{ width: "40px" }} />
      </div>
    </div>
  )
}

export default Contact
