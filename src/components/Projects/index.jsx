import React, { useEffect } from 'react'
import styles from './projects.module.css'
import "aos/dist/aos.css"
import Aos from 'aos'

const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: "500" })
  }, [])

  return (
    <div className={styles.projects_container}>
      <div className={styles.projects_tittle_container}>
        <h2>Projects</h2>
      </div>
      <div className={styles.images_projects_container}>
        <div className={styles.imageContainer} data-aos="flip-right">
          <img src="/projects_images/calculadora-web.png" alt="" />
          <div className={styles.tools}>
            <div className={styles.projectName}>
              <label htmlFor="" style={{ fontSize: "15px" }}>WEB CALCULATOR</label>
            </div>
            <div className={styles.toolsContainer}>
              <div className={styles.tool}>
                <label htmlFor="">HTML</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">JS</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">CSS</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer} data-aos="flip-right">
          <img src="/projects_images/agenda-contactos-react.png" alt="" className={styles.project} />
          <div className={styles.tools}>
            <div className={styles.projectName}>
              <label htmlFor="" style={{ fontSize: "15px" }}>CONTACT AGENDA</label>
            </div>
            <div className={styles.toolsContainer}>
              <div className={styles.tool}>
                <label htmlFor="">HTML</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">REACT</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">CSS</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer} data-aos="flip-right">
          <img src="/projects_images/agenda-contactos-react.png" alt="" className={styles.project} />
          <div className={styles.tools}>
            <div className={styles.projectName}>
              <label htmlFor="" style={{ fontSize: "15px" }}>CONTACT AGENDA</label>
            </div>
            <div className={styles.toolsContainer}>
              <div className={styles.tool}>
                <label htmlFor="">HTML</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">REACT</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">CSS</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer} data-aos="flip-right">
          <img src="/projects_images/agenda-contactos-react.png" alt="" className={styles.project} />
          <div className={styles.tools}>
            <div className={styles.projectName}>
              <label htmlFor="" style={{ fontSize: "15px" }}>CONTACT AGENDA</label>
            </div>
            <div className={styles.toolsContainer}>
              <div className={styles.tool}>
                <label htmlFor="">HTML</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">REACT</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">CSS</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer} data-aos="flip-right">
          <img src="/projects_images/agenda-contactos-react.png" alt="" className={styles.project} />
          <div className={styles.tools}>
            <div className={styles.projectName}>
              <label htmlFor="" style={{ fontSize: "15px" }}>CONTACT AGENDA</label>
            </div>
            <div className={styles.toolsContainer}>
              <div className={styles.tool}>
                <label htmlFor="">HTML</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">REACT</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">CSS</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer} data-aos="flip-right">
          <img src="/projects_images/agenda-contactos-react.png" alt="" className={styles.project} />
          <div className={styles.tools}>
            <div className={styles.projectName}>
              <label htmlFor="" style={{ fontSize: "15px" }}>CONTACT AGENDA</label>
            </div>
            <div className={styles.toolsContainer}>
              <div className={styles.tool}>
                <label htmlFor="">HTML</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">REACT</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">CSS</label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imageContainer} data-aos="flip-right">
          <img src="/projects_images/agenda-contactos-react.png" alt="" className={styles.project} />
          <div className={styles.tools}>
            <div className={styles.projectName}>
              <label htmlFor="" style={{ fontSize: "15px" }}>CONTACT AGENDA</label>
            </div>
            <div className={styles.toolsContainer}>
              <div className={styles.tool}>
                <label htmlFor="">HTML</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">REACT</label>
              </div>
              <div className={styles.tool}>
                <label htmlFor="">CSS</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
