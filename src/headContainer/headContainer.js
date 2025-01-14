import './headContainer.css';
import logo from './logo.png';

function headContainer({ onNavClick }) {
  return (
    <div className="headContainer">
      <div id="logo">
        <img src={logo} alt="logo for Paradox Spay neuter" className="mainLogo" />
      </div>
      <div id="rightHeadContainer">
        <div id ="phones">
            <ul>
                <li>(770) 972 5067</li>
                <li>(770) 787 8717</li>
            </ul>
        </div>
        <div id="navBar">
            <ul>
                <li><a href="#" onClick={ () => onNavClick('about')}>About</a></li>
                <li><a href="#" onClick={ () => onNavClick('services')}>Services</a></li>
                <li><a href="#" onClick={ () => onNavClick('care')}>Care Instructions</a></li>
                <li><a href="#" onClick={ () => onNavClick('staff')}>Meet the Staff</a></li>
                <li><a href="#" onClick={ () => onNavClick('tour')}>Tour</a></li>
                <li><a href='#' onClick={ () => onNavClick('contact')}>Contact</a></li>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default headContainer;
