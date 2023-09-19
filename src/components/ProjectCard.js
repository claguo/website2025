import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  const [isHovered, setIsHovered] = useState(false);
  const { project } = props;
  const src = `./imgs/${project.path}.png`;

  return (
    <>
        <Link
        to={`/${project.path}`}
        onMouseEnter={() => {setIsHovered(true);}}
        onMouseLeave={() => {setIsHovered(false);}}
        className='horizSection'
        style={{margin: '6rem 0 6rem'}}
        >
            <figure className='horizSection'>
                <div className='threeColumns' style={{display:'flex'}}>
                <img src={src} alt={project.title} 
                    style={{
                        width: '92%',
                        aspectRatio: '16/9',
                        transform: isHovered ? 'skewX(-4deg)' : '',
                        borderRadius: '1rem'
                    }}
                />
                </div>

                <div className='twoColumns paragraphContainer' style={{justifyContent: 'flex-end'}}>
                    <div>
                        <h1>{project.title}</h1>
                        <h2>{project.type}</h2>
                    </div>
                    <p>{project.description}</p>
                </div>
            </figure>
        </Link>

    </>
  )
}

export default ProjectCard
