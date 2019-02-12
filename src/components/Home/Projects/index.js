import React, { Component } from 'react';

import Wrapper from './Wrapper';

import './style.css';
import content from './content';

class Projects extends Component {
   render() {
      return (
         <div className="column projects">
            <h1>{content.title}</h1>
            <p className="intro">
               {content.body}
            </p>
            <Wrapper
               concepts={content.hypertubeConcepts}
               description={content.hypertubeDescrip}
               githubLink={content.hypertubeLink}
               title={content.hypertube}
               technos={content.hypertubeTech}
            />
            <Wrapper
               concepts={content.matchaConcepts}
               description={content.matchaDescrip}
               githubLink={content.matchaLink}
               title={content.matcha}
               technos={content.matchaTech}
            />
            <Wrapper
               concepts={content.abstractVmConcepts}
               description={content.abstractVmDescrip}
               githubLink={content.abstractVmLink}
               title={content.abstractVm}
               technos={content.abstractVmTech}
            />
            <Wrapper
               concepts={content.shellConcepts}
               description={content.shellDescrip}
               title={content.shell}
               technos={content.shellTech}
            />
            <Wrapper
               concepts={content.mallocConcepts}
               description={content.mallocDescrip}
               githubLink={content.mallocLink}
               title={content.malloc}
               technos={content.mallocTech}
            />
         </div>
      )
   };
}

export default Projects;