import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import Slide from 'react-reveal/Slide';

function Contact() {
  return (
    <div className="contactContainer" id="contact">
      <Slide bottom cascade>
      <h2>Contact</h2>
      <a href="mailto:danimmayfield@gmail.com">danimmayfield@gmail.com</a>
      <div className="iconContainer">
        <div className="iconHolder"><a className="contactIcon" href="https://www.linkedin.com/in/daniella-mayfield-5a6a99222/"><FiLinkedin/></a></div>
        <div className="iconHolder"><a className="contactIcon" href="https://github.com/danimayfield"><FiGithub/></a></div>
        <div className="iconHolder"><a className="contactIcon" href="mailto:danimmayfield@gmail.com"><FiMail/></a></div>
        
      </div>
      <p>Website developed by Dani Mayfield 2021</p>
      </Slide>
    </div>
  );
}

export default Contact;
