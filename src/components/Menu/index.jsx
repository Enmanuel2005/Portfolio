import React from 'react'
import styles from './menu.module.css'
import App from '../../App'


const Menu = ({ switchTheme, theme }) => {

  return (
    <div className={styles.container_menu} >
      <div className={styles.line_container}>
      </div>
      <div className={styles.elements_menu_container}>
        <div className={styles.name_container}>
          <h3 className={styles.first_name}>Hi, I'm Enmanuel👋</h3>
          <h3 className={styles.second_name}>Web Developer👨🏾‍💻</h3>
        </div>
        <div className={styles.buttons_menu_container}>
          <div className={styles.container_buttons}>
            <div className={styles.navBar}>
              <div className={styles.a_container}>
                <a href="#section_about" >
                  <img className={styles.about_logo} src={theme === 'dark' ? "/menu_logos/about_logo_dark.png" : "/menu_logos/about_logo_white.png"}/>
                  <span className={styles.about_text}>About Me</span>
                </a>
                <a href="#section_skills">
                  <img className={styles.skills_logo} src={theme === 'dark' ? "/menu_logos/skills_logo_dark.png" : "/menu_logos/skills_logo_white.png"}/>
                  <span className={styles.about_text}>Skills</span>
                </a>
                <a href="#section_projects">
                  <img className={styles.projects_logo} src={theme === 'dark' ? "/menu_logos/projects_logo_dark.png" : "/menu_logos/projects_logo_white.png"}/>
                  <span className={styles.about_text}>Projects</span>
                </a>
                <a href="#section_experience">
                  <img className={styles.experiencet_logo} src={theme === 'dark' ? "/menu_logos/experience_logo_dark.png" : "/menu_logos/experience_logo_white.png"}/>
                  <span className={styles.about_text}>Experience</span>
                </a>
                <a href="#section_contact">
                  <img className={styles.contact_logo} src={theme === 'dark' ? "/menu_logos/contact_logo_dark.png" : "/menu_logos/contact_logo_white.png"}/>
                  <span className={styles.about_text}>Contact Me</span>
                </a>
              </div>
            </div>
            <div className={styles.end_menu}>
              <div>
                <button onClick={switchTheme} className={styles.theme_button} role="button">{theme == "dark" ? <img src='/button_theme_logo/moon_icon.svg' /> : <img src='/button_theme_logo/sun_icon.svg' style={{ color: "white" }} />}</button>
              </div>
              <div className={styles.links_buttons}>
                <img src="/end_menu_images/github_link_logo.png" alt="" style={{ width: "23px" }} />
                <img src="/end_menu_images/linkedin_link_logo.png" alt="" style={{ width: "23px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Menu
