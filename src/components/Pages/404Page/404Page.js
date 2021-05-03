import React from 'react';

import Page from '../Page/Page';
import DogJPG from '../../../res/images/404-dog.jpg'; 
import './404Page.css'; 

class FourZeroFourPage extends Page {
    renderContentBody(){
        return (
            <>
                <h1>404</h1>
                <p>You are lost.</p>
                <img src={DogJPG}></img>
            </>
        )
    }
}

export default FourZeroFourPage; 