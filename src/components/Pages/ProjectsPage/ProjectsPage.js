import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  
import { JamesRobertsDotDev, NaiaSoftworks, NeuroSegmenter, PhoneToDesktopSync, SlimeControl, SpaceCube, WordFall } from '../../Projects/Projects'

class ProjectsPage extends Page {
    constructor(props){
        super(props)
        this.pageName = PAGE_NAMES.PROJECTS;
    }
    renderContentBody(){
        return (
            <>
              <PhoneToDesktopSync collapsed={false}/>
              <JamesRobertsDotDev collapsed={false}/>
              <NaiaSoftworks collapsed={true}/>
              <SlimeControl collapsed={true}/>
              <WordFall collapsed={true}/>
              <SpaceCube collapsed={true}/>
              <NeuroSegmenter collapsed={true}/>
            </>
        );
    }
}

export default ProjectsPage; 