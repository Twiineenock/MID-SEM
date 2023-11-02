import React from "react";
import '../CSS/gallery.css';


export default function Gallarey(){
    //https://github.com/Twiineenock/MID-SEM/blob/master/public/ASSETS/b10.jpeg
    //https://ibb.co/0Q04vyP
    const pics = [
        {
            imo: 'https://ibb.co/0Q04vyP',
            name: "Maria"
        },
        /* {
            url: "src/ASSETS/b2.jpeg",
            name: "Joan"
        },
        {
            url: "src/ASSETS/b3.jpeg",
            name: "Jane"
        },
        {
            url: "src/ASSETS/b4.jpeg",
            name: "Jennifer"
        },
        {
            url: "src/ASSETS/b5.jpeg",
            name: "Janet"
        },{
            url: "src/ASSETS/b6.jpeg",
            name: "John"
        },
        {
            url: "src/ASSETS/b7.jpeg",
            name: "James"
        },
        {
            url: "src/ASSETS/b8.jpeg",
            name: "Judas"
        },
        {
            url: "src/ASSETS/b9.jpeg",
            name: "Job"
        },
        {
            url: "src/ASSETS/b10.jpeg",
            name: "Jacob"
        },
        {
            url: "src/ASSETS/b11.jpeg",
            name: "Justice"
        },
        {
            url: "src/ASSETS/b12.jpeg",
            name: "Love"
        },
        {
            url: "src/ASSETS/b13.jpeg",
            name: "Blessing"
        },
        {
            url: "src/ASSETS/b14.jpeg",
            name: "Judge"
        },
        {
            url: "src/ASSETS/b15.jpeg",
            name: "Kirabo"
        },
        {
            url: "src/ASSETS/b16.jpeg",
            name: "Nakimuli"
        }, */
       
    ];

    const photos = pics.map((pic,i) => (
        <div className="pic--container" key={i}>
            <img src={pic.imo} alt="picture" className="image"/>
            <span className="name">{pic.name}</span>
        </div>
    ))

    return(
        <div>
            {photos}
        </div>
        
    )
}