import React from 'react'; 
import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants'; 

import './HomePage.css'; 

class HomePage extends Page {
    constructor(props){
        super(props); 
        this.pageName = PAGE_NAMES.HOME;
    }
    renderContentBody(){
        return (      
            <div className='home'>      
                <h1>Welcome!</h1>
                <p>
                  Welcome to my personal website. It's still a relatively young site but 
                  stick around as I continue updating it with posts and features.
                </p>
            </div>
        )
    }
}

export default HomePage;