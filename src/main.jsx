import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import './index.css'
import { HashRouter } from "react-router-dom"
import AppRoutes from "./Routes.jsx"
import ScrollToTop from "./components/ScrollToTop"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <ScrollToTop />
      <AppRoutes />
    </HashRouter>
  </StrictMode>
)
