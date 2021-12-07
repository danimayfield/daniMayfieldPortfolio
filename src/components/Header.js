import blob from '../images/1.png'

function Header() {
    return (
      <header>
          <div className="headerText">
            <h1>Dani Mayfield</h1>
            <h3>Web Developer</h3>
          </div>
          <img className="blob" src={blob} alt="red coloured blob for design" />
      </header>
    );
  }

  export default Header