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
              <JamesRobertsDotDev/>
              <PhoneToDesktopSync collapsible={true}/>
              <SlimeControl collapsible={true}/>
              <WordFall collapsible={true}/>
              <SpaceCube collapsible={true}/>
              <NeuroSegmenter collapsible={true}/>
            </>
        );
    }
}

export default ProjectsPage; 