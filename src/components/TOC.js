import blob from "../images/3.png";
import { BsDashLg } from "react-icons/bs";
import Slide from 'react-reveal/Slide';
import Jello from 'react-reveal/Jello';

function TOC() {
  return (
    <div className="tocContainer wrapper" id="menu">
      <div className="firstRow">
        <Slide bottom cascade>
          <div className="menuA">
            <p>01.</p>
            <h2>
              <a
                href="#about"
                // On click = function to scroll smoothly 
                onClick={(e) => {
                  // set variable menu to the element with the id of about
                  let about = document.getElementById("about");
                  // prevent the default snap to that id
                  e.preventDefault();
                  // when about is clicked , set the scroll to a behaviour of smooth
                  about &&
                    about.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                About
              </a>
            </h2>
          </div>
        </Slide>

        <div className="dash">
          <Slide bottom>
            <i>
              <BsDashLg />
              <BsDashLg />
              <BsDashLg />
              <BsDashLg />
              <BsDashLg />
            </i>
          </Slide>
        </div>
        <Slide bottom cascade>
          <div className="menuW">
            <p>02.</p>
            <h2>
              <a
                href="#projects"
                // On click = function to scroll smoothly 
                onClick={(e) => {
                  // set variable menu to the element with the id of projects
                  let projects = document.getElementById("projects");
                  // prevent the default snap to that id
                  e.preventDefault();
                  // when projects is clicked , set the scroll to a behaviour of smooth
                  projects &&
                    projects.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Works
              </a>
            </h2>
          </div>
        </Slide>
      </div>
      <Jello>
        <img className="blob2" src={blob} alt="orange blob for design" />
      </Jello>
      <Slide bottom cascade>
        <div className="menuC">
          <p>03.</p>
          <h2>
            <a
              href="#contact"
              // On click = function to scroll smoothly 
              onClick={(e) => {
                // set variable menu to the element with the id of contact
                let contact = document.getElementById("contact");
                // prevent the default snap to that id
                e.preventDefault();
                // when contact is clicked , set the scroll to a behaviour of smooth
                contact &&
                  contact.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Contact
            </a>
          </h2>
        </div>
      </Slide>
    </div>
  );
}

export default TOC;
