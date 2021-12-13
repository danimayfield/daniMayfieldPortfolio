import { FiLinkedin, FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import Slide from "react-reveal/Slide";

function Contact() {
  return (
    <Slide bottom cascade>
      <div className="contactContainer" id="contact">
        <div className="wrapper">
          <div className="contact">
          <h2>Contact</h2>
          <a href="mailto:danimmayfield@gmail.com">danimmayfield@gmail.com</a>
          <div className="iconContainer">
              <a
                className="contactIcon"
                href="https://www.linkedin.com/in/daniella-mayfield-5a6a99222/"
              >
                <FiLinkedin />
              </a>
              <a className="contactIcon" href="https://github.com/danimayfield">
                <FiGithub />
              </a>
              <a className="contactIcon" href="https://twitter.com/danimayf">
                <FiTwitter />
              </a>
              <a className="contactIcon" href="mailto:danimmayfield@gmail.com">
                <FiMail />
              </a>
          </div>
          <p>Website developed by Dani Mayfield 2021</p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default Contact;
