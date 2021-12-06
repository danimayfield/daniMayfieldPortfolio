import logo from '../images/DMLogo.png'
import blob from '../images/1.png'

function Header() {
    return (
      <header>
          {/* <img className="logo" src={logo} alt="Dani Mayfield Logo" /> */}
          <div className="headerText">
            <h1>Dani Mayfield</h1>
            <h3>Web Developer</h3>
          </div>
          <img className="blob" src={blob} alt="" />
      </header>
    );
  }

  export default Header