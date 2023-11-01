import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './index.css'
//import BigFam from './Pages/BigFam';
import App from './App'



const open = <button className='open'>OPEN</button>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
