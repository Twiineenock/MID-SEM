import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import './CSS/vanlife.css';
import About from './About.jsx'


export default function Vanlife(){
    return(
        <div>
            <main>
              <h1>You got travel plans, we   got the travel vans.</h1>
              <h2>Add adventure to your   life by joining the #vanlife   movement. Rent the perfect   van to make your perfect road   trip</h2>
              <button>Find your van</button>
            </main>
            
            <footer>
                <h3>c2022 #VANLIFE</h3>
            </footer>
        </div>
    )
}