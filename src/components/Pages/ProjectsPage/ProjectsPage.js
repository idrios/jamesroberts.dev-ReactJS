import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  
import { NaiaSoftworks, NeuroSegmenter, SpaceCube, WordFall } from '../../Projects/Projects'

class ProjectsPage extends Page {
    constructor(props){
        super(props)
        this.pageName = PAGE_NAMES.PROJECTS;
    }
    renderContentBody(){
        return (
            <>
              <NaiaSoftworks collapsed={true}/>
              <WordFall collapsed={true}/>
              <SpaceCube collapsed={true}/>
              <NeuroSegmenter collapsed={true}/>
            </>
        );
    }
}

export default ProjectsPage; 