import './headContainer.css';
import logo from './logo.png';

function headContainer({ onNavClick }) {

  function toggleMenu() {
    const nav = document.querySelector('#navBar ul');
    nav.classList.toggle('show');
  }

  function handleNavClick(section) {
    onNavClick(section);
    toggleMenu();
  }

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
                <li><button onClick={ () => handleNavClick('about')}>About</button></li>
                <li><button onClick={ () => handleNavClick('services')}>Services</button></li>
                <li><button onClick={ () => handleNavClick('care')}>Care Instructions</button></li>
                <li><button onClick={ () => handleNavClick('staff')}>Meet the Staff</button></li>
                <li><button onClick={ () => handleNavClick('tour')}>Tour</button></li>
                <li><button onClick={ () => handleNavClick('contact')}>Contact</button></li>
            </ul>
            <div className="burger-menu" onClick={toggleMenu}>
              <span id='berger'>&#9776;</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default headContainer;
