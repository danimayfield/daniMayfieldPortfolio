import "./App.scss";
import Header from "./components/Header";
import TOC from "./components/TOC";
import About from "./components/About";
import Projects from "./components/ProjectsSlider";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import logo from './images/DMLogo.png'



function App() {
  return (
    <div>
      <img className="logo" src={logo} alt="Dani Mayfield Logo" />
      <Header/>
      <Navigation/>
      <TOC/>
      <main>
        <About/>
        <Projects />
        <Contact/>
      </main>
    </div>
  );
}

export default App;
