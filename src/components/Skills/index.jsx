import React from 'react'
import styles from './skills.module.css'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {

  useEffect(() => {
    Aos.init({ duration: "800" })
  }, [])

  return (
    <div className={styles.skills_container}>
      <div className={styles.tittle_skills_container}>
        <h2>Skills</h2>
      </div>
      <div className={styles.image_skills_container}>
        <div className={styles.skillContainer} data-aos="zoom-in">
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} id={styles.basic_sql}>BASIC</div>
            <div className={styles.progressBar} id={styles.middle_sql}>MIDDLE</div>
            <div className={styles.progressBar} id={styles.advanced_sql}>ADVANCED</div>
            <div className={styles.progressBar} id={styles.expert_sql}>EXPERT</div>
          </div>
          <img src="/logos/sql-logo.png" alt="" style={{ width: "70px", marginLeft: "10px" }} />
        </div>
        <div className={styles.skillContainer} data-aos="zoom-in">
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} id={styles.basic_js}>BASIC</div>
            <div className={styles.progressBar} id={styles.middle_js}>MIDDLE</div>
            <div className={styles.progressBar} id={styles.advanced_js}>ADVANCED</div>
            <div className={styles.progressBar} id={styles.expert_js}>EXPERT</div>
          </div>
          <img src="/logos/js-logo.png" alt="" style={{ width: "70px", marginLeft: "10px" }} />
        </div>
        <div className={styles.skillContainer} data-aos="zoom-in">
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} id={styles.basic_git}>BASIC</div>
            <div className={styles.progressBar} id={styles.middle_git}>MIDDLE</div>
            <div className={styles.progressBar} id={styles.advanced_git}>ADVANCED</div>
            <div className={styles.progressBar} id={styles.expert_git}>EXPERT</div>
          </div>
          <img src="/logos/github-logo.png" alt="" style={{ width: "70px", marginLeft: "10px" }} />
        </div>
        <div className={styles.skillContainer} data-aos="zoom-in">
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} id={styles.basic_react}>BASIC</div>
            <div className={styles.progressBar} id={styles.middle_react}>MIDDLE</div>
            <div className={styles.progressBar} id={styles.advanced_react}>ADVANCED</div>
            <div className={styles.progressBar} id={styles.expert_react}>EXPERT</div>
          </div>
          <img src="/logos/react-logo.png" alt="" style={{ width: "70px", marginLeft: "10px" }} />
        </div>
        <div className={styles.skillContainer} data-aos="zoom-in">
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} id={styles.basic_html}>BASIC</div>
            <div className={styles.progressBar} id={styles.middle_html}>MIDDLE</div>
            <div className={styles.progressBar} id={styles.advanced_html}>ADVANCED</div>
            <div className={styles.progressBar} id={styles.expert_html}>EXPERT</div>
          </div>
          <img src="/logos/html-logo.png" alt="" style={{ width: "70px", marginLeft: "10px" }} />
        </div>
        <div className={styles.skillContainer} data-aos="zoom-in">
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} id={styles.basic_css}>BASIC</div>
            <div className={styles.progressBar} id={styles.middle_css}>MIDDLE</div>
            <div className={styles.progressBar} id={styles.advanced_css}>ADVANCED</div>
            <div className={styles.progressBar} id={styles.expert_css}>EXPERT</div>
          </div>
          <img id='css_skill' src="/logos/css-logo.png" alt="" style={{ width: "70px", marginLeft: "10px" }} />
        </div>
      </div>
    </div>
  )
}

export default Skills