import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './route'
import './assets/css/app.scss'
import { AppProvider } from './context/app'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  // </React.StrictMode>,
)