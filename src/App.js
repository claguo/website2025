import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import Footer from './components/Footer';
import CollabRISDPage from './pages/CollabRISDPage';
import EatTheOceanPage from './pages/EatTheOceanPage';
import GuoSweetsPage from './pages/GuoSweetsPage';
import { ProjectContextProvider } from './context/ProjectContext';

import './App.css';
import ReproCarePage from './pages/ReproCarePage';

function App() {
  return (
    <ProjectContextProvider>
      <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/collab-risd" element={<CollabRISDPage/>} />
            <Route path='/repro-care' element={<ReproCarePage/>} />
            {/* <Route path='/girls-games' element={<GirlsGamesPage/>} /> */}
            <Route path="/eat-the-ocean" element={<EatTheOceanPage/>} />
            <Route path="/guo-sweets" element={<GuoSweetsPage/>} />
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
