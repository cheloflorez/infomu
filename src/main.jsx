import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InfoMUApp from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfoMUApp />
  </StrictMode>,
)
