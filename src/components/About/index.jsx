import React from 'react'
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_tittle_container}>
        <button className={styles.button_cv}>Download CV</button>
        <h2>About Me</h2>
      </div>
      <div className={styles.about_info_container}>
        <div className={styles.image_about}>
          <div className={styles.image_about_2}>
            <img src="/images_info/my_image.jpg" alt="" style={{ width: "150px" }} />
          </div>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, porro et quidem nesciunt dolores repudiandae excepturi magni natus, sequi vitae velit doloremque eligendi fugiat molestias, incidunt aspernatur? Atque, quisquam ipsum?</p>
      </div>
    </div>
  )
}

export default About