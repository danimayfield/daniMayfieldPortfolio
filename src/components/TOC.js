import blob from "../images/3.png";
import { BsDashLg } from "react-icons/bs";

function TOC() {
  return (
    <div className="tocContainer" id="menu">
      <div className="firstRow">
        <div className="menuA">
          <p>01.</p>
          <h2>
            <a
              href="#about"
              onClick={(e) => {
                let about = document.getElementById("about");
                e.preventDefault();
                about &&
                  about.scrollIntoView({ behavior: "smooth", block: "start" });
                window.history.pushState("about", "about", "/about");
              }}
            >
              About
            </a>
          </h2>
        </div>
        <div className="dash">
          <i>
            <BsDashLg />
            <BsDashLg />
            <BsDashLg />
            <BsDashLg />
            <BsDashLg />
          </i>
        </div>
        <div className="menuW">
          <p>02.</p>
          <h2>
            <a
              href="#projects"
              onClick={(e) => {
                let projects = document.getElementById("projects");
                e.preventDefault();
                projects &&
                  projects.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                window.history.pushState("projects", "projects", "/projects");
              }}
            >
              Works
            </a>
          </h2>
        </div>
      </div>
      <img className="blob2" src={blob} alt="" />
      <div className="menuC">
        <p>03.</p>
        <h2>
          <a
            href="#contact"
            onClick={(e) => {
              let contact = document.getElementById("contact");
              e.preventDefault();
              contact &&
                contact.scrollIntoView({ behavior: "smooth", block: "start" });
              window.history.pushState("contact", "contact", "/contact");
            }}
          >
            Contact
          </a>
        </h2>
      </div>
    </div>
  );
}

export default TOC;
