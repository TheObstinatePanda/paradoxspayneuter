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
                        <li>Spay(female) $165 Includes spay, pain injection, take home meds, and e-collar</li>
                        <li>Neuter(male) $150 Includes neuter, pain injection, take home meds, and e-collar</li>
                            <ul>
                                <li>Add $48 for dogs 50-69 lbs</li>
                                <li>Add $97 for dogs 70-75 lbs</li>
                                <li>Add $182 for dogs that are pregnant or have an abnormal uterus.</li>
                            </ul>
                        <p>We highly recommend puppies have 2 DHPP shots prior to surgery day.</p>
                    </ul>
                </div>
                <div id='cat'>
                    <h2>Cats and Kittens</h2>
                    <ul className='prices'>
                        <li>Spay(female) $90 (Up to $100 for cats that are pregenant, the cost depends on how far along the pregnancy is). Includes Surgery and Pain injection.</li>
                        <li>Neuter(male) $67 Includes Surgery and Pain injection. Includes Surgery and Pain injection.</li>
                        
                        <p>All cats must be in a carrier or trap or we will not accept them. An injection for additional pain management is available for $10. Additional take home pain meds or antibiotics are $18 each.</p>
                    </ul>
                    <h2>Feral Cats</h2>
                    <ul>
                        <p>No appointment necessary. Drop off Tues-Thurs 8:30 AM to 10 AM. Max of 3 cats per day. All ferals must be in a trap and Ear Tip is required!</p>
                        <li>Feral Cat Spay(female)$90 (Up to $100 for cats that are pregenant, the cost depends on how far along the pregnancy is). Includes surgery, pain injection and ear tip.</li>
                        <li>Feral Cat Neuter(male)$67 Includes surgery, pain injection and ear tip.</li>
                    </ul>
                    <h2>Other Services</h2>
                    <ul className='prices'>
                        <li>Dog Rabies Vaccine $20</li>
                        <li>Dog DHPP/DHLPP Vaccine $20</li>
                        <li>Dog Kennel Cough/Bordetella Vaccine $20</li>
                        <li>Dog Heartworm Test $35</li>
                        <li>Cat Rabies Vaccine (Purevax) $28</li>
                        <li>Feral Cat Rabies Vaccine (No Certificate)$10</li>
                        <li>Cat FRCP Vaccine $20</li>
                        <li>Cat FeLV/Feline Leukemia Vaccine $32</li>
                        <li>Cat FeLV/FIV Combo Test $44</li>
                        <li>Microchip $20</li>
                        <li>Fecal Test $20</li>
                        
                        <li>Flea/Tick Treament - Cost varies</li>
                        <li>E-Collar (if required) $15</li>
                        <li>Heartworm Treatment - price depends on the weight of the dog</li>
                        <li>Heartworm/Flea/Tick Preventative - price depends on the weight of the dog/cat</li>
                        <li>Yearly Wellness Vaccine Exam $45 *must be spayed or neutered</li>
                        <li>Wellness Vaccine Exam for Surgery $20 *must prepay for spay or neuter</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default services;