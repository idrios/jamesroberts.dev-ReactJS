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
                  website to show off some of my projects and talk about things that interest me. 
                  I hope you find some of this interesting as well. 
                </p>
                <br/>
                <h3 className='enthusiastic-text'><i>Now available in dark mode!</i></h3>
            </div>
        )
    }
}

export default HomePage;