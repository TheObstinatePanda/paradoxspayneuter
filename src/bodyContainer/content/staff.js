import './staff.css';
import {
    anne,
    drbethperry,
    drjessica,
    drrachel,
    jessie,
    julie,
    tanya,
    teresa,
    misti,
    lilly, 
    valerie,
 } from '../images';

function staff() {
    return (
        <div id="staffcont">
            <h2>Our Staff</h2>
            <p>Our staff is made up of a team of two licensed Verinarians as well as a number of experienced Vet Assistants and volunteers who are dedicated to providing the best care for your pet.</p>
            
            <div id="biocont">
                <h3 className='profile'>Dr. Perry, Veterinarian</h3>
                <div className="bio1">
                    <img src={drbethperry} alt='Dr. Perry'/>
                    <div className ='text'>
                        A graduate of the University of Georgia ("Go Dawgs"), Dr. Perry has dedicated most of her career to reducing pet overpopulation through her low-cost spay and neuter services. Deeply involved in her rescue work with the PPNK organization, she approaches every animal with compassion and care and consistently goes above and beyond for patients and people. Dr. Perry is also the proud mother of Dr. Jessica and Dr. Rachel, who have followed in her footsteps as veterinarians. Known as one of the most caring and supportive leaders you'll ever work with, she is truly the heart of Paradox.
                    </div>
                </div>
                <hr />
                    <h3 className='profile'>Dr. Jessica</h3>
                <div className="bio2">
                    <img src={drjessica} alt='Dr. Jessica'/>
                    <div className ='text'>
                        <p>
                            Dr. Jessica is a University of Georgia graduate who works at Paradox, where she performs spay and neuter surgeries to help reduce animal overpopulation. She is also a co-owner of Grayson Veterinary Hospital. A lifelong pet lover, Dr. Jessica is passionate about improving the lives of animals through compassionate veterinary care.
                        </p>
                    </div>
                </div>
                <hr />
                    <h3 className='profile'>Dr. Rachel</h3>
                <div className="bio1">
                    <img src={drrachel} alt='Dr. Rachel'/>
                    <div className ='text'>
                        <p>
                            Dr. Rachel is a graduate of the University of Georgia and co-owner of Grayson Veterinary Hospital. A dedicated veterinarian, she is known for her compassionate care and willingness to go above and beyond for her patients and clients. She combines medical expertise with a warm and approachable personality. A devoted mom to Ava, she deeply values her family and everyone she meets.
                        </p>
                    </div>
                </div>
                <hr />
                    <h3 className='profile'>Tanya</h3>
                <div className="bio2">
                    <img src={tanya} alt='Tanya'/>
                    <div className ='text'>
                        <p>
                            Tanya is a longtime member of the Paradox team and oversees Human Resources. She is also deeply involved with PPNK Rescue organization. Known for her compassion and generosity, Tanya truly loves every animal and would give anything to help one in need. If you ever have a problem, she is the one person you can always call.
                        </p>
                    </div>
                </div>
                <hr />
                <h3 className='profile'>Teresa</h3>
                <div className="bio1">                    
                    <img src={teresa} alt='Teresa'/>
                    <div className ='text'>
                        <p>
                            Teresa has been with Paradox for several years. She is the friendly voice and face at the front desk, an avid animal lover who works closely with the PPNK rescue organization. She is known for her bright smile and happy personality. Teresa helps make every client feel welcome.
                        </p>
                    </div>
                </div>
                <hr />
                <h3 className='profile'>Anne</h3>   
                <div className="bio2">
                    <img src={anne} alt="Anne"/>
                    <div className ='text'>
                        <p>
                            Anne has been with Paradox for years. She is a stained glass teacher and is very passionate about sharing the craft with others. Anne is devoted to the rescue and care of animals.
                        </p>
                    </div>
                </div>
                 <hr />
                    <h3 className='profile'>Misti</h3>
                <div className="bio1">
                    <img src={misti} alt='Misti'/>
                    <div className ='text'>
                        <p>
                            Misti has been with Paradox for several years and a valued member of the team. She works behind the scenes, supporting surgical procedures and patient care. Outside of work, she is a devoted mom and passionate animal lover with multiple pets.
                        </p>
                    </div>
                </div>
                <hr />
                    <h3 className='profile'>Lilly</h3>
                <div className="bio2">
                    <img src={lilly} alt='Lilly'/>
                    <div className ='text'>
                        <p>
                            Lilly works behind the scenes, assisting with animal surgeries. She has hands-on experience in animal care and is a recent high school graduate with a strong passion for horses, dogs, and cats.
                        </p>
                    </div>
                </div>
                <hr />
                <h3 className='profile'>Valerie</h3>
                <div className="bio1">                    
                    <img src={valerie} alt='Valerie'/>
                    <div className ='text'>
                        <p>
                            Valerie is a graduate of the University of Georgia with extensive experience in animal medicine and a valued member of Paradox. As a surgical veterinary technician, she provides skilled and compassionate care to every patient. Outside of work, she is a mom of three and shares her life with horses, dogs, cats, and just about any animal she can help.
                        </p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
};

export default staff;