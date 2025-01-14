import './footContainer.css';
function footContainer() {
  return (
    <div className="footContainer">
        <div id='footInfo'>
          <div id='footInfoLeft'>
            <p>
              1200 Industrial Pkwy,  <br />
              Loganville, GA 30052 <br />
              <br />
              Spay/Neuter voicemail: (770) 972-5067 <br/>
              Front Desk: (770) 787-8717 <br/>
              <br />
              Hours of Operation: <br />
              Tues-Wed 8:30AM-5:30PM <br />
              Thurs 7:30AM-5:30PM <br />
              Closed Fri-Mon
            </p>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.29739002445!2d-83.86893392367962!3d33.75298023347191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5c941ab8ab2df%3A0x862376fcd62bdb0f!2sParadox%20Spay%20%26%20Neuter%20Clinic!5e0!3m2!1sen!2sus!4v1736287255081!5m2!1sen!2sus" 
            style={{ border: 0}}
            allowfullscreen=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            id="map"
            title="Paradox Spay & Neuter Map Location">
          </iframe>   
        </div>
        <div id='footer'>

        </div>
    </div>
  );
}

export default footContainer;
