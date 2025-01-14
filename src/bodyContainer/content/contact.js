import './contact.css';

function contact() {
    return (
        <div id='contactcont'>
            <div id='contactInfo'>
                <h2>Spay/Neuter Appointments Only</h2>
                <p>Please submit an online <a href='http://paradoxspayneuter.com/appointment.html' target='blank'>Appointment</a> request or leave your name and number on our spay/neuter voicemail: (770) 972-5067</p>
                <h2>All other Information</h2>
                <p>For non-spay/neuter appointments, or questions about volunteering, dontations, or other information, please call the front desk during normal business hours or leave a message after hours: (770) 787-8717</p>
            </div>
            <div id='fullSerVets'>
                <h2>Full Service Veterinarians</h2>
                <p><a href='http://www.monroeanimal.com/' target='blank'>Monroe Animal care Hospital</a> - Dr. Asha Wise, Dr. Elizabeth Perry, Dr. Lisa Kelly</p>
                <p><a href='https://eastmetroemergency.com/' target='blank'>East Metro Animal Emergency clinic</a> - All hours full service emergency clinic</p>
            </div>
            <div id='othLocServ'>
                <h2>Other Local Services</h2>
                <p><a href='https://www.gapetresources.com/' target='blank'>Georgia Pet Resources</a> - Statewide veterinary resources</p>
                <p><a href='https://www.ashleyhillspetcenter.com/' target='blank'>Ashley Hills Pet Center</a> - Boarding, Grooming, and Training in Monroe.</p>
            </div>
        </div>
    )
}

export default contact;