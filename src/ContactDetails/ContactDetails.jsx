import React from "react";
import { useParams } from "react-router-dom";
import contacts from "../Contacts/Contacts";
import "./ContactDetails.css";

const ContactDetails = () => {
    const { contactId } = useParams();
    const contact = contacts.find((c) => c.id === contactId);

    if (!contact) return <p>Contacto no encontrado</p>;

    return (
        <div className="contact-details">
            <div className="image_details">
            <img
                src={contact.image}
                alt={`Foto de ${contact.name}`}
                className="contact-details-image"
            />
            </div>
            <div className="info-details">
            <h2 className="contact-details-name">{contact.name}</h2>
            <p className="contact-details-slogan">{contact.slogan}</p>
            <p className="contact-details-number">{contact.number}
            </p>
        </div>
        </div>
    );
};

export default ContactDetails;