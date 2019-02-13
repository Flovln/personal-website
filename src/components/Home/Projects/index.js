import React, { Component } from 'react';

import Wrapper from './Wrapper';

import './style.css';
import {
   TITLE,
   BODY,
   PROJECT_1,
   PROJECT_1_DESC,
   PROJECT_1_LINK,
   PROJECT_1_TECH,
   PROJECT_1_CONCEPTS,
   PROJECT_2,
   PROJECT_2_DESC,
   PROJECT_2_LINK,
   PROJECT_2_TECH,
   PROJECT_2_CONCEPTS,
   PROJECT_3,
   PROJECT_3_DESC,
   PROJECT_3_LINK,
   PROJECT_3_TECH,
   PROJECT_3_CONCEPTS,
   PROJECT_4,
   PROJECT_4_DESC,
   PROJECT_4_TECH,
   PROJECT_4_CONCEPTS,
   PROJECT_5,
   PROJECT_5_DESC,
   PROJECT_5_LINK,
   PROJECT_5_TECH,
   PROJECT_5_CONCEPTS,
} from './constants';

class Projects extends Component {
   render() {
      return (
         <div className="column projects">
            <h1>{TITLE}</h1>
            <p className="intro">
               {BODY}
            </p>
            <Wrapper
               concepts={PROJECT_1_CONCEPTS}
               description={PROJECT_1_DESC}
               githubLink={PROJECT_1_LINK}
               title={PROJECT_1}
               technos={PROJECT_1_TECH}
            />
            <Wrapper
               concepts={PROJECT_2_CONCEPTS}
               description={PROJECT_2_DESC}
               githubLink={PROJECT_2_LINK}
               title={PROJECT_2}
               technos={PROJECT_2_TECH}
            />
            <Wrapper
               concepts={PROJECT_3_CONCEPTS}
               description={PROJECT_3_DESC}
               githubLink={PROJECT_3_LINK}
               title={PROJECT_3}
               technos={PROJECT_3_TECH}
            />
            <Wrapper
               concepts={PROJECT_4_CONCEPTS}
               description={PROJECT_4_DESC}
               title={PROJECT_4}
               technos={PROJECT_4_TECH}
            />
            <Wrapper
               concepts={PROJECT_5_CONCEPTS}
               description={PROJECT_5_DESC}
               githubLink={PROJECT_5_LINK}
               title={PROJECT_5}
               technos={PROJECT_5_TECH}
            />
         </div>
      )
   };
}

export default Projects;