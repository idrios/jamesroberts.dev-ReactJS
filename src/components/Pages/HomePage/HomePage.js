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
                  I'm a full stack software developer. I focus on developing software that is 
                  easily maintainable through use of good design patterns and principles. I'm
                  interested in designing software in the medical space, though I also enjoy 
                  game development and am very happy to work on any project that gives me a 
                  chance to expand my skills.  
                </p>
                <br/>
                <p>
                  Thanks for visiting my site and feel free to reach out to me. 
                </p>
            </div>
        )
    }
}

export default HomePage;