import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  

class AboutPage extends Page {
    constructor(props){
        super(props)
        this.showHeader = true; 
        this.showFooter = true; 
        this.pageName = PAGE_NAMES.ABOUT;
    }
    renderContent(){
        return (
            <div>
                <h1>About Page!</h1>
                <p>This is the about page!</p>
            </div>
        );
    }
}

export default AboutPage; 