import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  

class DemosPage extends Page {
    constructor(props){
        super(props)
        this.showHeader = true; 
        this.showFooter = true; 
        this.pageName = PAGE_NAMES.DEMOS;
    }
    renderContentBody(){
        return (
            <>
                <h1>Demos Page!</h1>
                <p>This is the demos page!</p>
            </>
        );
    }
}

export default DemosPage; 