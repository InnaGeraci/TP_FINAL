import React, { useContext } from "react";
import ContactCard from "./ContactCard";
import contacts from "./Contacts";
import MessagesContext from "../MessagesContext/MessagesContext";

const ContactList = () => {
    const { messagesByContact } = useContext(MessagesContext);

    return (
        <div className="contact-list">
            {contacts.map(contact => {
                const messages = messagesByContact[contact.id] || [];
                const lastContactMessage = [...messages].reverse().find(m => m.sender === "contact");
                const lastConnection = lastContactMessage ? lastContactMessage.time : "";
                const lastMessageText = lastContactMessage ? lastContactMessage.text : "";

                return (
                    <ContactCard
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        slogan={contact.slogan}
                        image={contact.image}
                        lastConnection={lastConnection}
                        lastMessage={lastMessageText}
                        className="contact-card"
                        nameClass="contact-name"
                        sloganClass="contact-slogan"
                        imageClass="contact-image"
                        lastMessageClass="last-message"
                        lastConnectionClass="last-connection"
                    />
                );
            })}
        </div>
    );
};

export default ContactList;