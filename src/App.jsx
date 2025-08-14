import Header from "./components/Header"
import Home from "./pages/Home"
import GeotaggersProject from "./pages/projects/GeotaggersProject"
import AtlasProject from "./pages/projects/AtlasProject"
import TownHallProject from "./pages/projects/TownHallProject"
import HangmanProject from "./pages/projects/HangmanProject"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="px-4 pt-6 pb-2 md:px-12 min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
