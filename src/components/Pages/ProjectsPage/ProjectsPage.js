import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  
import { NeuroSegmentor, SpaceCube, WordFall } from '../../Projects/Projects'

class ProjectsPage extends Page {
    constructor(props){
        super(props)
        this.pageName = PAGE_NAMES.PROJECTS;
    }
    renderContentBody(){
        return (
            <>
              <WordFall/>
              <SpaceCube/>
              <NeuroSegmentor/>
            </>
        );
    }
}

export default ProjectsPage; 