import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import TownHallProject from "./pages/projects/TownHallProject"
import GeotaggersProject from "./pages/projects/GeotaggersProject"
import AtlasProject from "./pages/projects/AtlasProject"
import HangmanProject from "./pages/projects/HangmanProject"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects/townhall" element={<TownHallProject />} />
          <Route path="projects/geotagger" element={<GeotaggersProject />} />
          <Route path="projects/atlas" element={<AtlasProject />} />
          <Route path="projects/hangman" element={<HangmanProject />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);