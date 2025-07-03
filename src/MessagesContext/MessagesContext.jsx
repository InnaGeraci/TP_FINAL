import React, { createContext, useState } from "react";
const MessagesContext = createContext();

const initialMessagesByContact = {
    "1": [
        { id: 0, sender: "Me", text: "Alo", time: "07:00", seen: true },
        { id: -1, sender: "contact", text: "Ahoy, Mate, how can I help you today?", time: "07:01", seen: true }
    ],
    "2": [
        { id: 0, sender: "Me", text: "Heya", time: "07:00", seen: true },
        { id: -1, sender: "contact", text: "Huzzah! I'm making biscuits, do you want some?", time: "07:01", seen: true }
    ],
    "3": [
        { id: 0, sender: "Me", text: "Hello", time: "07:00", seen: true },
        { id: -1, sender: "contact", text: "Can't you see I'm bussy? Go bother another cat", time: "07:01", seen: true }
    ],
    "4": [
        { id: 0, sender: "Me", text: "Hi", time: "07:00", seen: true },
        { id: -1, sender: "contact", text: "I know I'm beautiful, love. What do you need from this goddess?", time: "07:01", seen: true }
    ],
    "5": [
        { id: 0, sender: "Me", text: "Hey", time: "07:00", seen: true },
        { id: -1, sender: "contact", text: "Ah? What? Who are you?", time: "07:01", seen: true }
    ],
};

export const MessagesProvider = ({ children }) => {
    const [messagesByContact, setMessagesByContact] = useState(initialMessagesByContact);
    const addMessage = (contactId, newMessage) => {
        setMessagesByContact(prev => ({
            ...prev,
            [contactId]: [...(prev[contactId] || []), newMessage]
        }));
    };

    return (
        <MessagesContext.Provider value={{ messagesByContact, addMessage }}>
            {children}
        </MessagesContext.Provider>
    );
};

export default MessagesContext;