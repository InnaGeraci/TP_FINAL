import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContactList from './Contacts/ContactList';
import ContactDetails from "./ContactDetails/ContactDetails"
import ChatSection from "./Chat/ChatSection"
import React from "react";
import contacts from './Contacts/contacts';
import "./app.css"



function App() {
    return (

        <>
            <div className="banner">
                <div className="banner_title">

                    <Link to="/" className="title-link">
                        <h1>WhatsMeow</h1>
                    </Link>
                    <p>We cats are more than happy to help you! Just say the word, human!</p>
                </div>
                <div >
                    <img className='banner_image' src="/assets/catpaw.png" alt="image_banner" />
                </div>
            </div>
            <Routes>
                <Route path="/" element={<ContactList />} />
                <Route path="/chat/:contactId" element={<ChatSection />} />
                <Route path="/contact/:contactId" element={<ContactDetails />} />
            </Routes>
        </>
    );
}

export default App;