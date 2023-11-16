import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from "./Navbar"
import "./styles.css"
import {BrowserRouter} from "react-router-dom"

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div id="app-content">
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
