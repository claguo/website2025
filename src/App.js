import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import Footer from './components/Footer';
import CollabRISDPage from './pages/CollabRISDPage';
import EatTheOceanPage from './pages/EatTheOceanPage';
import GuoSweetsPage from './pages/GuoSweetsPage';
import ReproCarePage from './pages/ReproCarePage';
import AstrosPage from './pages/AstrosPage';
import { ProjectContextProvider } from './context/ProjectContext';

function App() {
  return (
    <ProjectContextProvider>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/astros" element={<AstrosPage/>} />
            <Route path="/collab-risd" element={<CollabRISDPage/>} />
            <Route path='/repro-care' element={<ReproCarePage/>} />
            <Route path="/eat-the-ocean" element={<EatTheOceanPage/>} />
            <Route path="/guo-sweets" element={<GuoSweetsPage/>} />
            <Route path='/repro-web-app' component={() => {
              window.location.href = 'https://repro-care-world.netlify.app/';
              return null;
            }}/>
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
