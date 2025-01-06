import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './meeting4/login.jsx'
import Numbers from './meeting8/useState1.jsx'
import Array2 from './meeting8/useState2.jsx'
import Counter2 from './meeting8/praktek/praktek1.jsx'
import LoginStatus from './meeting8/praktek/praktek2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < LoginStatus/>
  </StrictMode>,
)
