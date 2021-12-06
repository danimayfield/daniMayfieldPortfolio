import blob from '../images/3.png'
import { BsDashLg} from "react-icons/bs";

function TOC() {
  return (
    <div className="tocContainer">
      <div className="firstRow">
        <div className="menuA">
          <p>01.</p>
          <h2><a href="#">About</a></h2>
        </div>
        <div className="dash">
          <i><BsDashLg/><BsDashLg/><BsDashLg/><BsDashLg/><BsDashLg/></i>
        </div>
        <div className="menuW">
          <p>02.</p>
          <h2><a href="#">Works</a></h2>
        </div>
      </div>
      <img className="blob2" src={blob} alt="" />
      <div className="menuC">
        <p>03.</p>
        <h2><a href="#">Contact</a></h2>
      </div>
    </div>
  );
}

export default TOC;
