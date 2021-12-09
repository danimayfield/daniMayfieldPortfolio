import { BsCircleFill } from "react-icons/bs";
import { useState } from 'react';
import useScrollHandler from "./NavScroll";


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
    // set the active type to be menu
    setActiveType('menu')

  }

  // Function to scroll smoothly & set active type on click
  const handleAboutClick = (e) => {
    // set variable about to the element with the id of about
    let about = document.getElementById("about");
    // prevent the default snap to that id
    e.preventDefault();
    // when about is clicked , set the scroll to a behaviour of smooth
    about && about.scrollIntoView({ behavior: "smooth", block: "start" });
    // Set the active type to 'about' on click
    setActiveType('about')

  }

  // Function to scroll smoothly & set active type on click
  const handleProjectsClick = (e) => {
    // set variable projects to the element with the id of about
    let projects = document.getElementById("projects");
    // prevent the default snap to that id
    e.preventDefault();
    // when projects is clicked , set the scroll to a behaviour of smooth
    projects && projects.scrollIntoView({ behavior: "smooth", block: "start" });
    // Set the activetype to be projects
    setActiveType('projects')

  }

  // Function to scroll smoothly & set active type on click
  const handleContactClick = (e) => {
    // set variable contact to the element with the id of about
    let contact = document.getElementById("contact");
    // prevent the default snap to that id
    e.preventDefault();
    // when contact is clicked , set the scroll to a behaviour of smooth
    contact && contact.scrollIntoView({ behavior: "smooth", block: "start" });
    // Set the activetype to be contact
    setActiveType('contact')

  }



  return (
    <div className="navigation">
      <a
        aria-label="menu"
        href="#menu"
        // On click function to scroll smoothly
        onClick={handleMenuClick}
        // Set the class name to navIcon and set the classname to navActive if the active type matches 'menu' or the scroll matches 'menu' - if the scroll does not match 'menu' set it to navInactive
        className={`navIcon ${(activeType === 'menu') || (scroll === 'menu') ? 'navActive' : null} ${scroll !== 'menu' ? 'navInactive' : null}`}
      ><BsCircleFill /></a>
      <a
        aria-label="about"
        href="#about"
        // On click function to scroll smoothly
        onClick={handleAboutClick}
        // Set the class name to navIcon and set the classname to navActive if the active type matches 'about' or the scroll matches 'about' - if the scroll does not match 'about' set it to navInactive
        className={`navIcon ${(activeType === 'about') || (scroll === "about") ? 'navActive' : null} ${scroll !== 'about' ? 'navInactive' : null}`}
      ><BsCircleFill /></a>
      <a
        aria-label="projects"
        href="#projects"
        // On click function to scroll smoothly
        onClick={handleProjectsClick}
        // Set the class name to navIcon and se the classname to navActive if the active type matches 'projects' or the scroll matches 'projects' - if the scroll does not match 'projects' set it to navInactive
        className={`navIcon ${(activeType === 'projects') || (scroll === "projects") ? 'navActive' : null} ${scroll !== 'projects' ? 'navInactive' : null}`}

      ><BsCircleFill /></a>
      <a
        aria-label="contact"
        href="#contact"
        // On click function to scroll smoothly
        onClick={handleContactClick}
        // Set the class name to navIcon and set the classname to navActive if the active type matches 'contact' or the scroll matches 'contact' - if the scroll does not match 'contact' set it to navInactive
        className={`navIcon ${(activeType === 'contact') || (scroll === "contact") ? 'navActive' : null} ${scroll !== 'contact' ? 'navInactive' : null}`}
      ><BsCircleFill /></a>
    </div>
  );
}

export default Navigation;
