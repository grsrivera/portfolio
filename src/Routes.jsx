import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import TownHallProject from "./pages/projects/TownHallProject";
import GeotaggersProject from "./pages/projects/GeotaggersProject";
import AtlasProject from "./pages/projects/AtlasProject"
import HangmanProject from "./pages/projects/HangmanProject"
// import NotFound from "./pages/NotFound"; // simple 404 component

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects/townhall" element={<TownHallProject />} />
        <Route path="projects/geotagger" element={<GeotaggersProject />} />
        <Route path="projects/atlas" element={<AtlasProject />} />
				<Route path="projects/hangman" element={<HangmanProject />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
