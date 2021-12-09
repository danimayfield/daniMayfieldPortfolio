import Slider from "react-perfect-slider";
import { FiGithub, FiLink, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import ethicalMakeup from "../images/ethicalMakeup.png";
import sprinklingRainbows from "../images/sprinklingRainbows.png";
import whatToWatch from "../images/whatToWatch.png";
import blob from "../images/4.png";
import Slide from "react-reveal/Slide";
import Jello from "react-reveal/Jello";

function Projects() {
  return (
    <div className="wrapper">
      <div className="sliderContainer" id="projects">
        <Slide bottom cascade>
          <h2>Projects</h2>
        </Slide>
        <Slider
          autoplayDuration={15000}
          renderControls={(next, previous) => [
            <button className="prev" onClick={previous}>
              <FiArrowLeft />
            </button>,
            <button className="next" onClick={next}>
              <FiArrowRight />
            </button>,
          ]}
        >
          <div className="proj">
            <img
              src={ethicalMakeup}
              alt="mock up of Ethical Makeup website on fake laptop screen"
            />
            <h4>Ethical Makeup</h4>
            <p>
              Ethical Makeup was a group project which required the 4 of us to
              collaborate through GitHub. Working from the brief we utilitized
              the Makeup-api to allow users to view, search and sort through
              vegan makeup products. When users find a product they like, they
              may click on that product to view more details. Users may also
              leave a review on any product which is stored within firebase.
            </p>
            <div className="projectLinks">
              <div className="linkHolder">
                <a href="https://github.com/group-project-four/ethicalMakeup">
                  <FiGithub />
                </a>
              </div>
              <div className="linkHolder">
                <a href="https://ethical-makeup-4.netlify.app">
                  <FiLink />
                </a>
              </div>
            </div>

            <p>
              React | Javascript | APIs | Firebase | GitHub | Sass | Figma |
              HTML
            </p>
          </div>
          <div className="proj">
            <img
              src={sprinklingRainbows}
              alt="mock up of Sprinkling Rainbows Shop website on fake laptop screen"
            />
            <h4>Sprinkling Rainbows Shop</h4>
            <p>
              Sprinkling Rainbows is an Etsy-inspired e-commerce site. Users can
              filter the different kinds of products based on it's type and they
              may also add and remove items to their cart.
            </p>
            <div className="projectLinks">
              <div className="linkHolder">
                <a href="https://github.com/danimayfield/daniellaGagliardiProject3">
                  <FiGithub />
                </a>
              </div>
              <div className="linkHolder">
                <a href="https://sprinkling-rainbows.netlify.app/">
                  <FiLink />
                </a>
              </div>
            </div>

            <p>React | Javascript | Firebase | GitHub | CSS | HTML</p>
          </div>
          <div className="proj">
            <img
              src={whatToWatch}
              alt="mock up of What to Watch website on fake laptop screen"
            />
            <h4>What to Watch</h4>
            <p>
              What to Watch was a collaborative project. My partner and I
              developed a fully responsive random movie generator application.
              Users are prompted to click a button which then displays 6 random
              movies from the API. You may add items to your watchlist by either
              dragging and dropping or by clicking the cart icon. You may also
              remove items from your watchlist once you've finished the movie.{" "}
            </p>
            <div className="projectLinks">
              <div className="linkHolder">
                <a href="https://github.com/Cohort-37-Group-14/What-to-Watch">
                  <FiGithub />
                </a>
              </div>
              <div className="linkHolder">
                <a href="https://what-to-watch-juno.netlify.app/">
                  <FiLink />
                </a>
              </div>
            </div>

            <p>Javascript | APIs | GitHub | Sass | HTML</p>
          </div>
        </Slider>
        <Jello>
          <img className="blob3" src={blob} alt="Grey blob on side of screen for design" />
        </Jello>
      </div>
    </div>
  );
}

export default Projects;
