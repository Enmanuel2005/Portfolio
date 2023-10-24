import { useEffect, useState } from 'react'
import './global.css'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Menu from './components/Menu'
import useLocalStorage from 'use-local-storage'



function App() {

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light")

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme)
  }

  return (
    <>
      <div className="structure_page_container" data-theme={theme}>
        <div className="structure_menu_container">
          <Menu switchTheme={switchTheme} theme={theme}/>
        </div>
        <div className="structure_info_container">
          <section className='section_about' id='section_about'>
            <About />
          </section>
          <section className='section_skills' id='section_skills'>
            <Skills />
          </section>
          <section id='section_projects'>
            <Projects />
          </section>
          <section id='section_experience'>
            <Experience />
          </section>
          <section id='section_contact'>
            <Contact />
          </section>
        </div>
      </div>
    </>
  )
}

export default App