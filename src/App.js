import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/general/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import A11yBuddyPage from "./pages/A11yBuddyPage";
import CollabRISDPage from "./pages/CollabRISDPage";
import EatTheOceanPage from "./pages/EatTheOceanPage";
import ReproCarePage from "./pages/ReproCarePage";
import { ProjectContextProvider } from "./context/ProjectContext";
import ScrollToTop from "./components/general/ScrollToTop";

function BackgroundColor({ children }) {
  const location = useLocation();

  // Apply different classes or styles based on the route
  useEffect(() => {
    if (location.pathname === "/") {
      document.body.className = "bg-bg-gray";
    } else {
      document.body.className = "bg-bg-white";
    }
  }, [location.pathname]);

  return children;
}

function App() {
  return (
    <ProjectContextProvider>
      <Router>
        <ScrollToTop />
        <BackgroundColor />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/a11y-buddy" element={<A11yBuddyPage />} />
          <Route path="/collab-risd" element={<CollabRISDPage />} />
          <Route path="/repro-care" element={<ReproCarePage />} />
          <Route path="/eat-the-ocean" element={<EatTheOceanPage />} />
          <Route
            path="/repro-web-app"
            component={() => {
              window.location.href = "https://repro-care-world.netlify.app/";
              return null;
            }}
          />
          {/* {projectData.map((project) => (
              <Route key={project.id} path={`/projects/${project.path}`} element={<ProjectPage project={project} />} />
            ))} */}
        </Routes>
        <Footer />
      </Router>
    </ProjectContextProvider>
  );
}

export default App;
