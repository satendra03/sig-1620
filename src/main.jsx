import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ContextProvider } from './context/Context.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <ContextProvider>
        <App />
        <Toaster />
      </ContextProvider>
    </Router>
)


