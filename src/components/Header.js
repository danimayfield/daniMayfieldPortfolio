import blob from '../images/1.png'
import Jello from 'react-reveal/Jello';

function Header() {
    return (
      <header>
          <div className="headerText">
            <h1>Dani Mayfield</h1>
            <h3>Web Developer</h3>
          </div>
          <Jello>
          <img className="blob" src={blob} alt="red coloured blob for design" />
          </Jello>
      </header>
    );
  }

  export default Header