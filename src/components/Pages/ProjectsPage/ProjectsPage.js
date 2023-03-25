import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  

class ProjectsPage extends Page {
    constructor(props){
        super(props)
        this.pageName = PAGE_NAMES.PROJECTS;
    }
    renderContentBody(){
        return (
            <>
                <h1>Projects Page!</h1>
                <p>This is the Projects page!</p>
            </>
        );
    }
}

export default ProjectsPage; 