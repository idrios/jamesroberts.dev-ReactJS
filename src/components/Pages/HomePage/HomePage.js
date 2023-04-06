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
                  I made this website to show off some of the stuff I'm working on and post various
                  musings. The site is still young, but do come back as I hope to start writing 
                  blog posts a bit more often. 
                </p>
                <br/>
                <p>
                  Thanks for visiting and feel free to reach out to me. 
                </p>
            </div>
        )
    }
}

export default HomePage;