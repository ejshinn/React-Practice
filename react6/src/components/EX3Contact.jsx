// EX3Contact.jsx

import EX3ContactForm from "./EX3ContactForm.jsx";

function EX3Contact() {
    return (
        <div className={'row my-5'}>
            <h1>Contact</h1>
            <br/>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater
                the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact
                us.</p>
            <p>Catering Service, 42nd Living St, 43043 New York, NY</p>
            <p>You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <EX3ContactForm/>
        </div>
    );
}

export default EX3Contact;