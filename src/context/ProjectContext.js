import React, { createContext, useContext } from 'react';
import projectData from './projectData';

const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
    return (
      <ProjectContext.Provider value={projectData}>
        {children}
      </ProjectContext.Provider>
    );
  };
  
  export const useProjectContext = () => {
    return useContext(ProjectContext);
  };