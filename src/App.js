import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/general/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/general/Footer";
import Mochi from "./pages/Mochi";
import A11yBuddy from "./pages/A11yBuddy";
import CollabRISD from "./pages/CollabRISD";
import EatTheOcean from "./pages/EatTheOcean";
import ReproCare from "./pages/ReproCare";
import { ProjectContextProvider } from "./context/ProjectContext";
import ScrollToTop from "./components/general/ScrollToTop";
import Login from "./pages/Login";
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
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mochi-health" element={<Mochi />} />
          <Route path="/a11y-buddy" element={<A11yBuddy />} />
          <Route path="/collab-risd" element={<CollabRISD />} />
          <Route path="/repro-care" element={<ReproCare />} />
          <Route path="/eat-the-ocean" element={<EatTheOcean />} />
          <Route path="/login" element={<Login />} />
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
