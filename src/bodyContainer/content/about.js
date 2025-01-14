// about
import './about.css';
import {
   strayleft,
   straymid,
   strayright 
} from '../images';

function about() {
    return (
        <div id='aboutContainer'>
            <div id='aboutText'>
                <p><span id="firstWords">Paradox Spay Neuter Clinic </span>is a non-profit organization dedicated to providing low-cost spay and neuter services to the community. We are committed to reducing the number of unwanted animals in the area by providing affordable spay and neuter services to pet owners. Our clinic is staffed by experienced veterinarians and technicians who are dedicated to providing high-quality care to every animal that comes through our doors.</p>
                <p>Our mission is to reduce pet overpopulation and improve the lives of animals in the community. We believe that every animal deserves a loving home, and we are committed to helping make that a reality for as many animals as possible. By providing low-cost spay and neuter services, we hope to make it easier for pet owners to do their part in reducing the number of unwanted animals in the area.</p>
            </div>

            <div id='hoursContainer'>
                <div id='aboutHours'>
                    <h2>Hours of Operation</h2>
                    <p>Tuesday and Wednesday 8:30 AM - 5:30 PM</p>
                    <p>Thursday: 7:30am - 5:30pm</p>
                    <p>Closed Friday through Monday</p>

                    <p> If you would like to visit, the best time would be 10 AM - 4PM on days we are open.</p>

                    <p>We are located at:</p>
                    <ul style={{ listStyleType: 'none' }}>1200 Industrial Parkway, Loganville, GA 30052</ul>
                </div>

                <div id= 'aboutImgs'>
                    <img src={strayleft} alt='cat with kittens'className='stageImg'/>
                    <img src={straymid} alt='stray dogs'className='stageImg'/>
                    <img src={strayright} alt='lonely cat'className='stageImg'/>
                </div>
            </div>
        </div> 
    )
}

export default about;