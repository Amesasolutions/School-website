import Aos from 'aos'
import './App.css'
import { useEffect } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import OurSchools from './pages/OurSchools'

function App() {

  useEffect(() => {
    Aos.init()
  }, [])
  
  return (
    <>
      <main>
        <Home/>
        <About/>
        <OurSchools/>
      </main>
    </>
  )
}

export default App
