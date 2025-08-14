import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './Routes.jsx'
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)
