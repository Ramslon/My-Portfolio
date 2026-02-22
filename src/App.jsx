
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Interest from "./components/Interests";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Education/>
      <Skills/>
      <Projects/>
      <Interest/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App