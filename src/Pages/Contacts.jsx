import React from "react";
import '../CSS/contacts.css';


export default function Contacts(){

    const contacts = [
        {
            title: "EMAIL: ",
            content: "twiineenockfox@gmail.com",
        },
        {
            title: "Tell: ",
            content: "+256 771 (250) 497",
        },
        {
            title: "Country: ",
            content: "Uganda",
        },
        {
            title: "City: ",
            content: "Kampala: ",
        },
        {
            title: "Village: ",
            content: "Bugema",
        },
        {
            title: "Post Office Box: ",
            content: "1176",
        },
    ]

    const sections = contacts.map(sec => (
        <section className="section">
            <span className="title">{sec.title}</span>
            <span className="content">{sec.content}</span>
        </section>
    ))
    return(
        <div className="contact--container">
            {sections}
        </div>
    )
}