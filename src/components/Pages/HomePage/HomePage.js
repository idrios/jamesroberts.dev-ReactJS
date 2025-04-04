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
                A full stack web developer who also knows biomedical stuff
                </p>
                <br/>
                <h3 className='enthusiastic-text'><i>Thsi site now also in dark mode!</i></h3>
            </div>
        )
    }
}

export default HomePage;