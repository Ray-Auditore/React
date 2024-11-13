import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserProfile from './meeting3/tugas3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProfile  />
  </StrictMode>,
)
