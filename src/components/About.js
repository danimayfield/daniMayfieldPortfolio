import img1 from "../images/Me1.jpg";
import blob4 from "../images/2.png"
import { ImAccessibility } from "react-icons/im";
import { RiCss3Line } from "react-icons/ri";
import { FaSass } from "react-icons/fa";
import { DiJavascript1, DiReact } from "react-icons/di"
import { FiGithub, FiFigma } from "react-icons/fi"
import { SiFirebase, SiAdobecreativecloud } from "react-icons/si"
import { CgSmartphone } from "react-icons/cg"
import { AiOutlineHtml5 } from "react-icons/ai"
import Slide from 'react-reveal/Slide';
import Jello from 'react-reveal/Jello';

function About() {
  return (
    <div className="about" id="about">
      <Jello>
        <img src={blob4} alt="red outlined blob for design" className="blob4" />
      </Jello>
      <Slide bottom cascade>
        <div className="aboutSection">
          <div className="column1">
            <h2>Dani</h2>
            <img src={img1} alt="Dani Mayfield portrait" />
          </div>

          <div className="column2">
            <h2 className="mayfield">Mayfield</h2>
            <div className="aboutText">
              <div className="breakLine"></div>
              <p>
                Photographer turned <strong>web-developer</strong> based out of
                Kitchener, Ontario. Challenging myself everyday to learn new tools
                and skills for my developer journey. You can never stop
                growing in this industry.
              </p>
              <p>
                Fuelled by tea and books with a love for all things thoughtfully
                curated with style. I'm passionate about bringing ideas to life
                through visually aesthetic, clean and accessible code. Excited to
                collaborate with you!
              </p>
              <p>
                <strong>What I'm currently learning: </strong>
              </p>
              <ul>
                <li key="web3">Web3</li>
                <li key="solidity">Solidity</li>
                <li key="epicReact">Epic React by Kent C. Dodds</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>
      <Slide bottom cascade>
      <div className="toolkit">
        <h3>My Toolkit</h3>
        <div className="iconsGrid">
          <div className="iconContainer">
            <i><AiOutlineHtml5 /></i>
            <p>HTML5</p>
          </div >
          <div className="iconContainer">
            <i><RiCss3Line /></i>
            <p>CSS3</p>
          </div>
          <div className="iconContainer">
            <i><FaSass /></i>
            <p>SCSS</p>
          </div>
          <div className="iconContainer">
            <i><DiJavascript1 /></i>
            <p>Javascript</p>
          </div>
          <div className="iconContainer">
            <i><DiReact /></i>
            <p>React</p>
          </div>
          <div className="iconContainer">
            <i><FiGithub /></i>
            <p>GitHub</p>
          </div>
          <div className="iconContainer">
            <i><SiFirebase /></i>
            <p>Firebase</p>
          </div>
          <div className="iconContainer">
            <i><CgSmartphone /></i>
            <p>Responsive Design</p>
          </div>
          <div className="iconContainer">
            <i><ImAccessibility /></i>
            <p>Accessibility</p>
          </div>
          <div className="iconContainer">
            <i><FiFigma /></i>
            <p>Figma</p>
          </div>
          <div className="iconContainer">
            <i><SiAdobecreativecloud /></i>
            <p>Adobe Creative Suite</p>
          </div>
        </div>
      </div>
      </Slide>
    </div>
  );
}

export default About;
