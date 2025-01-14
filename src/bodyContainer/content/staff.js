import './staff.css';
import {
    anne,
    drbethperry,
    drtrishdurrence,
    jessie,
    julie,
    tanya
 } from '../images';

function staff() {
    return (
        <div id="staffcont">
            <h2>Our Staff</h2>
            <p>Our staff is made up of a team of two licensed Verinarians as well as a number of experienced Vet Assistants and volunteers who are dedicated to providing the best care for your pet.</p>
            
            <div id="biocont">
                <h3 className='profile'>Dr. Elizabeth Perry</h3>
                <div className="bio1">
                    <img src={drbethperry} alt='Dr. Elizabeth Perry'/>
                    <div className ='text'>
                        <p>
                            Dr. Perry has dedicated a large part of her practice to providing low-cost spay/neuter in the metro Atlanta area. She provides services to organizations and agencies including PAWS Atlanta, Henry, Morgan, Rockdale and Jasper County Animal Control, and also practices at Monroe Animal Care Hospital. Dr. Perry has performed over 10,000 spay-neuter surgeries. She is also highly active in pet rescue, having saved hundreds of dogs and cats.
                        </p>
                        <p>
                            In 2007 Dr. Perry was named one of Walton County's "Unsung Heros" by the Walton Tribune for her work with animal shelter rescue efforts and she remains a vital component of the area's rescue community.
                        </p> 
                        <p>
                            A graduate of the University of Georgia Veterinary School, Dr. Perry and her family live in Walton County.
                        </p>
                    </div>
                </div>
                <hr />
                    <h3 className='profile'>Dr. Trisha Durrence</h3>
                <div className="bio2">
                    <img src={drtrishdurrence} alt='Dr. Trish Durrence'/>
                    <div className ='text'>
                        <p>
                            Dr. Durrence works every other friday for us. She has 24 years experience in small animal medicine and surgery.
                        </p>
                    </div>
                </div>
                <hr />
                    <h3 className='profile'>Julie</h3>
                <div className="bio1">
                    <img src={julie} alt='Julie'/>
                    <div className ='text'>
                        <p>
                            Julie works in the clinic as Receptionist and Vet Assistant. She is co-director of Pound Puppies 'N Kittens as well as Secretary and Treasurer. Working with PPNK, Julie has rescued hundreds of dogs over 10 years, frequently dedicating her dining room to litters of puppies. She is on a mission to save dogs and cats and fight overpopulation - the number one killer of dogs and cats. "I should be retired 'cause I am old and grouchy but no one will let me, so I will probably just keel over at adoptions in front of Petsmart the day I die..." (Hopefully that won't be for a long time!)
                        </p>
                    </div>
                </div>
                <hr />
                    <h3 className='profile'>Jessie</h3>
                <div className="bio2">
                    <img src={jessie} alt='Jessie'/>
                    <div className ='text'>
                        <p>
                            Jessie is originally from the Boston area and has worked as a Vet Assistant at Paradox for more than 5 years. She is a foster home for PPNK and also runs her own rescue (<a href='https://fivefreedomsfarm.org/' target='_blank'>Five Freedoms Farm</a>) with her partner, Nancy. Jessie has a full time business as a professional freelance sign language interpreter. She is dedicated to the cause of reducing animal cruelty, suffering and euthanasia. She envies the strength, forgiveness and unconditional love that dogs possess and can't imagine a life without lots of doggies to love!
                        </p>
                    </div>
                </div>
                <hr />
                <h3 className='profile'>Tanya</h3>
                <div className="bio1">                    
                    <img src={tanya} alt='tanya'/>
                    <div className ='text'>
                        <p>
                            Tanya has worked with Paradox Spay Neuter Clinic for over 4 years. She is a dedicated employee who has a passion for animals. She recently received the Animal Professional of the Year award from the Walton Animal Guild recognizing her dedication and love for the animals she cares for. Tanya is also an active volunteer with Pound Puppies 'N Kittens. She fosters homeless dogs, especially Great Danes, takes them to adoptions on a regular basis. She has recently taken on the task of PPNK Volunteer Coordinator for the Conyers Petsmart cat adoption center. Tanya is always willing to help out where needed, she is truly an animal's best friend! 
                        </p>
                    </div>
                </div>
                <hr />
                <h3 className='profile'>Anne</h3>   
                <div className="bio2">
                    <img src={anne} alt="Anne"/>
                    <div className ='text'>
                        <p>
                            A native Atlantan, Anne has worked as a Vet Assistant at Paradox for 1 1/2 years, and volunteers and fosters animals for PPNK. An accountant in a former lifetime, Anne now is a professional stained glass artist and teacher. Previously, she owned retail pet supply stores and ran a large rescue-and-adoption program through those stores. Anne has a mini-farm and lives with many rescued animals. Her particular interest is caring for "senior citizen" dogs, or ones with physical or mental problems that make it difficult to find suitable adoption homes for them. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default staff;