import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  

class HomePage extends Page {
    constructor(props){
        super(props); 
        this.showHeader = true; 
        this.showFooter = true; 
        this.pageName = PAGE_NAMES.HOME;
    }
    renderContent(){
        return (            
            <h1>Home page!</h1>
        )
    }
}

export default HomePage;