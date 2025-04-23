import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
// Import all of Bootstrap's CSS
import { BrowserRouter } from 'react-router-dom'
import GlobalProvider from './context/GlobalContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalProvider>
    <App />
    </GlobalProvider>
    </BrowserRouter>
  </StrictMode>,
)
