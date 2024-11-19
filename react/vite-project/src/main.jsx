import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './meeting4/login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage  />
  </StrictMode>,
)
