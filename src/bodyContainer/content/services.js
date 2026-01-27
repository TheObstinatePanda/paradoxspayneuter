import './services.css';

function services() {
    return (
        <div id='servicesContainer'>
            <p>Click on the link below to make your appointment request. We will contact you with a confirmation if we are able to fit you into your selected slot. We are only open to the public on Tuesday, Wednesday, and Thrusday, please do NOT make an appointment for Monday or Friday as we are not open on those days.</p>

            <p>We highly recommend all puppies 2 years and younger have 2 DHPP shots prior to their spay/neuter appointment. If you wish to forgo this protection we cannot be held responsible and will require you to sign a waiver. You can make an appointment fo the shots by calling 770-787-8717.</p>

            <a href="https://www.clinichq.com/online/9596676a-b477-4076-8ce9-9ce9e56d8936">Click here to make an Appointment Request!</a>

            <p>Once your appointment is confirmed, we will contact you with drop-off and pick-up times. We may be able to provide same day service at an additional charge.</p>

            <p>On your appointment day, we provide same day service or you may request next day pick up for an additional charge. On Thusday, we are available for early drop off at 7:30 AM (no additional charge, just ask). We can accept payment by cash or credit/debit card. Unfortunately, we are unable to accept personal checks.</p>

            <p>If you have a feral dog/cat which needs a spay/neuter we do support trap neuter returns. Please call 770-787-8717 for more information.</p>

            <div id='dogvcat'>
                <div id='dog'>
                    <h2>Dogs</h2>
                    <p>NOTE: we do not perform surgery on dogs in heat</p>
                    <ul className='prices'>
                        <li>Spay(female) $100</li>
                        <li>Spay(female) under 6 months of 
                        age $80</li>
                        <li>Neuter(male) $95</li>
                        <li>Neuter(male) under 6 months of age $75</li>
                        <li>
                            <ul>
                                <li>Add $44 for dogs 50-69 lbs</li>
                                <li>Add $88 for dogs 70-89 lbs</li>
                                <li>Add $165 for dogs that are pregnant or have an abnormal uterus.</li>
                            </ul>
                        </li>
                        <p>Any dog spay over 90 lbs must call 770-787-8717, pressing option 3 and leave a voicemail to make an appointment for us to perform a quick exam to ensure we will be able to do surgery at our facility.</p>
                        <p>We highly recommend puppies have 2 DHPP shots prior to surgery day.</p>
                    </ul>
                </div>
                <div id='cat'>
                    <h2>Cats and Kittens</h2>
                    <ul className='prices'>
                        <li>Spay(female) $70 (Add $20-$65 for cats that are pregnat or in heat, the cose depends on how far along the pregnancy is.)</li>
                        <li>Neuter(male) $47</li>
                        
                        <p>All cats must be in a carrier or trap or we will not accept them. An injection for additional pain management is available for $10. Additional take home pain meds or antibiotics are $18 each.</p>
                    </ul>
                    <h2>Feral Cats</h2>
                    <ul>
                        <p>No appointment necessary. Drop off Tues-Thurs 8:30 AM to 10 AM. Max of 3 cats per day. All ferals must be in a trap and Ear Tip is required!</p>
                        <li>Feral Cat Spay(female)$77 (Add$22-$85 for cast that are pregnant. Pricing depends on how far along the pregnancy is.)</li>
                        <li>Feral Cat Neuter(male)$52</li>
                    </ul>
                    <h2>Other Services</h2>
                    <ul className='prices'>
                        <li>Dog Rabies Vaccine $20</li>
                        <li>Dog DHPP/DHLPP Vaccine $17</li>
                        <li>Dog Kennel Cough/Bordetella Vaccine $17</li>
                        <li>Dog Heartworm Test $33</li>
                        <li>Cat Rabies Vaccine (Purevax) $27</li>
                        <li>Feral Cat Rabies Vaccine $27</li>
                        <li>Cat FRCP Vaccine $17</li>
                        <li>Cat FeLV/Feline Leukemia Vaccine $31</li>
                        <li>Cat FeLV/FIV Combo Test $44</li>
                        <li>Microchip $28</li>
                        <li>Fecal Test $17</li>
                        <li>Flea/Tick Treament - Cost varies</li>
                        <li>E-Collar (if required) $12-$16</li>
                        <li>Heartworm Treatment - price depends on the weight of the dog</li>
                        <li>Heartworm/Flea/Tick Preventative - price depends on the weight of the dog/cat</li>
                        <li>Yearly Wellness Vaccine Exam $40 *must be spayed or neutered</li>
                        <li>Wellness Vaccine Exam for Surger $19 *must prepay for spay or neuter</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default services;