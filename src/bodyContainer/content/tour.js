import './tour.css';
import {
    clinicfront,
    frontdesk,
    surgery,
    catrecovery,
    dogroom,
} from '../images';

function tour() {
    return (
        <div id='tourcont'>
            <p>The clinic is located in Walton County and has been in operation since 2000. We are located in a former day center near Walnut Grove High School. <br />
            <br />
            We perform thousands of surgeries every year and we always place your pet's health first. We follow best practice disinfection procedures. For instance, our instruments are autoclaved after each use, we do not re-use disposable supplies, etc. If you have a problem post-op we are available and responsive.</p>

            <div id='tourImgs'>
                <div className="tourImg">
                    <p>The front of our building</p>
                    <img src={clinicfront} alt='front of our building'/>
                </div>
                <div className="tourImg">
                    <p>Our reception area</p>
                    <img src={frontdesk} alt='our front desk'/>
                </div>
                <div className="tourImg">
                    <p>Our Surgery</p>
                    <img src={surgery} alt='surgery room'/>
                </div>
                <div className="tourImg">
                    <p>Cats recovering from Anethesia</p>
                    <img src={catrecovery} alt='Cats recovering from Anethesia'/>
                </div>
                <div className="tourImg">
                    <p>Dog recovery area</p>
                    <img src={dogroom} alt='Cats recovering from Anethesia'/>
                </div>
            </div>
        </div>
    )
}

export default tour;