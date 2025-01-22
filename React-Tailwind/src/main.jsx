import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShoppingCard from './meeting13/praktek/no2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShoppingCard />
  </StrictMode>,
)
