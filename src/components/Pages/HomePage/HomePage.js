import React from 'react'; 

import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  

class HomePage extends Page {
    constructor(props){
        super(props); 
        this.pageName = PAGE_NAMES.HOME;
    }
    renderContentBody(){
        return (      
            <>      
                <h1>Welcome!</h1>
                <p>Thanks for visiting my website. I'm James Roberts, a full stack software developer. This is my website 
                  for posting various musings and showing off some of my work. I'm flattered that you've found your way
                  to my site, and I hope that you'll come back again in the future when I've updated with  some more posts
                  or projects. 
                </p>
            </>
        )
    }
}

export default HomePage;