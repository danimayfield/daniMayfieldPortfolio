import { FiLinkedin, FiGithub } from "react-icons/fi";
// import blob from '../images/4.png'

function Contact() {
  return (
    <div className="contactContainer">
      <h2>Contact</h2>
      <a href="#">danimmayfield@gmail.com</a>
      <div className="iconContainer">
        <div className="iconHolder"><a className="contactIcon" href="https://www.linkedin.com/in/daniella-mayfield-5a6a99222/"><FiLinkedin/></a></div>
        <div className="iconHolder"><a className="contactIcon" href="https://github.com/danimayfield"><FiGithub/></a></div>
        
      </div>
      <p>Website developed by Dani Mayfield 2021</p>
      {/* <img className="blob3" src={blob} alt="" /> */}
    </div>
  );
}

export default Contact;
