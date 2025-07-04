import contacts from "../Contacts/contacts";
import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MessagesContext from "../MessagesContext/MessagesContext";
import "./ChatSection.css"

const ChatSection = () => {
    const { contactId } = useParams();
    const contact = contacts.find((c) => c.id === contactId);

    const { messagesByContact, addMessage } = useContext(MessagesContext);

    const [newText, setNewText] = useState("");
    const [messages, setMessages] = useState(messagesByContact[contactId] || []);
    const [messageId, setMessageId] = useState(messages.length + 1);

    useEffect(() => {
        setMessages(messagesByContact[contactId] || []);
        setMessageId((messagesByContact[contactId]?.length || 0) + 1);
    }, [messagesByContact, contactId]);

    const sendMessage = () => {
        if (newText.length < 1) return;

        const newMessage = {
            id: messageId,
            sender: "Me",
            text: newText,
            time: "07:45",
            seen: false,
        };

        addMessage(contactId, newMessage);
        setNewText("");
        setMessageId(messageId + 1);

        setTimeout(() => {
            const autoReply = {
                id: messageId + 1,
                sender: "contact",
                text: contact.answer,
                time: "07:46",
                seen: true,
            };
            addMessage(contactId, autoReply);
            setMessageId((prev) => prev + 1);
        }, 1000);
    };

    return (
        <div className="chat-section">
            <div className="chat-header">
                <Link to={`/contact/${contactId}`}>
                    <img
                        src={contact.image}
                        alt={`Foto de ${contact.name}`}
                        className="chat-header-image"
                    />
                </Link>
                <h2 className="chat-header-name">{contact.name}</h2>
            </div>
            <div className="messages-container">
                {messages.map((msg) => {
                    let tick;
                    if (msg.seen) {
                        tick = "✓✓";
                    } else {
                        tick = "✓";
                    }

                    if (msg.sender === "Me") {
                        return (
                            <div key={msg.id} className="my-message">
                                <p>{msg.text}</p>
                                <div className="info">
                                    <span className="time">{msg.time}</span>
                                    <span className="tick">{tick}</span>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div key={msg.id} className="contact-message">
                                <p>{msg.text}</p>
                                <div className="info-contact">
                                    <span className="time">{msg.time}</span>
                                    <span className="tick">✓✓</span>
                                </div>
                            </div>
                        );
                    }
                })}
            </div>

            <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Write Here..."
            />
            <button className="send-button" onClick={sendMessage}>
                Send Meow-ssage!
            </button>
        </div>
    );
};

export default ChatSection;