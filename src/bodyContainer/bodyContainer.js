import React from 'react';
import './bodyContainer.css';
import clinic from './images/streetview.png'
import {
    about as About,
    services as Services,
    care as Care,
    staff as Staff,
    tour as Tour,
    contact as Contact
} from './content';


function bodyContainer({ content }) {

  return (
    <div className="bodyContainer">
        <div id= 'clinic'>
            <img src={clinic} alt="Paradox Spay Neuter Clinic" id="clinicImg"/>
        </div>
        <div id='stage'>
            {content === 'about' && <div id="about"><About /></div>}
            {content === 'services' && <div id="services"><Services /></div>}
            {content === 'care' && <div id="care"><Care /></div>}
            {content === 'staff' && <div id="staff"><Staff /></div>}
            {content === 'tour' && <div id="tour"><Tour /></div>}
            {content === 'contact' && <div id="contact"><Contact /></div>}

            
        </div>
       
    </div>
  );
}

export default bodyContainer;
