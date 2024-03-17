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
                <h1>Welcome</h1>
                <p>
                  I'm a full stack web developer who also knows biomedical stuff. I made this
                  website to show off some of my projects and work on things that interest me.
                  Someday I might even write essays or browser games. Stay tuned!
                </p>
                <br/>
                <h3 className='enthusiastic-text'><i>Now also in dark mode!</i></h3>
            </div>
        )
    }
}

export default HomePage;