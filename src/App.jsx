
import styles from './App.module.css'
import { About } from './componets/about/about'
import { Navbar } from './componets/navbar/navbar'
import { Presentation } from './componets/presentation/presentation'
import { Projects } from './componets/projects/projects'
import { Contact } from './componets/contact/contact'

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Presentation />
      <About />
      <Projects />
      <Contact />
    </div>
    
  )
}

export default App
