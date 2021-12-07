import { BsCircleFill } from "react-icons/bs";
import { useState } from 'react';
import useScrollHandler from "./Scroll";


function Navigation() {
  // Piece of state toggling the active state of the nav choice:
  const [activeType, setActiveType] = useState('')
  // Call useScrollHandler function:
  const scroll = useScrollHandler()

  // Function to scroll smoothly & set active type on click
  const handleMenuClick = (e) => {
    // set variable menu to the element with the id of menu
    let menu = document.getElementById("menu");
    // prevent the default snap to that id
    e.preventDefault();
    // when menu is clicked , set the scroll to a behaviour of smooth
    menu && menu.scrollIntoView({ behavior: "smooth", block: "start" });
    // push the url state to /menu
    window.history.pushState("menu", "menu", "/menu");
    // set the active type to be menu
    setActiveType('menu')

    // Remove the class of navActive from all other id's on click of this id
    const about = document.getElementById("about");
    about.classList.remove("navActive")
    const contact = document.getElementById("contact");
    contact.classList.remove("navActive")
    const projects = document.getElementById("projects");
    projects.classList.remove("navActive")
  }

  // Function to scroll smoothly & set active type on click
  const handleAboutClick = (e) => {
    // set variable about to the element with the id of about
    let about = document.getElementById("about");
    // prevent the default snap to that id
    e.preventDefault();
    // when about is clicked , set the scroll to a behaviour of smooth
    about && about.scrollIntoView({ behavior: "smooth", block: "start" });
    // push the url state to /about
    window.history.pushState("about", "about", "/about");
    // Set the active type to 'about' on click
    setActiveType('about')

    // Remove the class of navActive from all other id's on click of this id
    const menu = document.getElementById("menu");
    menu.classList.remove("navActive")
    const contact = document.getElementById("contact");
    contact.classList.remove("navActive")
    const projects = document.getElementById("projects");
    projects.classList.remove("navActive")
  }

  // Function to scroll smoothly & set active type on click
  const handleProjectsClick = (e) => {
    // set variable projects to the element with the id of about
    let projects = document.getElementById("projects");
    // prevent the default snap to that id
    e.preventDefault();
    // when projects is clicked , set the scroll to a behaviour of smooth
    projects && projects.scrollIntoView({ behavior: "smooth", block: "start" });
    // push the url state to /projects
    window.history.pushState("projects", "projects", "/projects");
    // Set the activetype to be projects
    setActiveType('projects')

    // Remove the class of navActive from all other id's on click of this id
    const menu = document.getElementById("menu");
    menu.classList.remove("navActive")
    const contact = document.getElementById("contact");
    contact.classList.remove("navActive")
    const about = document.getElementById("about");
    about.classList.remove("navActive")
  }

  // Function to scroll smoothly & set active type on click
  const handleContactClick = (e) => {
    // set variable contact to the element with the id of about
    let contact = document.getElementById("contact");
    // prevent the default snap to that id
    e.preventDefault();
    // when contact is clicked , set the scroll to a behaviour of smooth
    contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
    // push the url state to /contact
    window.history.pushState("contact", "contact", "/contact");
    // Set the activetype to be contact
    setActiveType('contact')

    // Remove the class of navActive from all other id's on click of this id
    const menu = document.getElementById("menu");
    menu.classList.remove("navActive")
    const projects = document.getElementById("projects");
    projects.classList.remove("navActive")
    const about = document.getElementById("about");
    about.classList.remove("navActive")
  }



  return (
    <div className="navigation">
      <a
        href="#menu"
        // On click function to scroll smoothly
        onClick={handleMenuClick}
        // Set the class name to navIcon and set the classname to navActive if the active type matches 'menu' or the scroll matches 'menu'
        className={`navIcon ${(activeType === 'menu') || (scroll === 'menu') ? 'navActive' : null}`}
      ><BsCircleFill /></a>
      <a
        href="#about"
        // On click function to scroll smoothly
        onClick={handleAboutClick}
        // Set the class name to navIcon and se the classname to navActive if the active type matches 'about' or the scroll matches 'about'
        className={`navIcon ${(activeType === 'about') || (scroll === "about") ? 'navActive' : null}`}
      ><BsCircleFill /></a>
      <a
        href="#projects"
        // On click function to scroll smoothly
        onClick={handleProjectsClick}
        // Set the class name to navIcon and se the classname to navActive if the active type matches 'projects' or the scroll matches 'projects'
        className={`navIcon ${(activeType === 'projects') || (scroll === "projects") ? 'navActive' : null}`}

      ><BsCircleFill /></a>
      <a
        href="#contact"
        // On click function to scroll smoothly
        onClick={handleContactClick}
        // Set the class name to navIcon and set the classname to navActive if the active type matches 'contact' or the scroll matches 'contact'
        className={`navIcon ${(activeType === 'contact') || (scroll === "contact") ? 'navActive' : null}`}
      ><BsCircleFill /></a>
    </div>
  );
}

export default Navigation;
