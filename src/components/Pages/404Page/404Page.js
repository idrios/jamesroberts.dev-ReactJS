import React from 'react';

import Page from '../Page/Page';
import DogPNG from '../../../res/images/404-dog.png'; 
import './404Page.css'; 

class FourZeroFourPage extends Page {
    renderContent(){
        return (
            <div className="page-content-center">
                <h1>404</h1>
                <p>You are lost.</p>
                <img src={DogPNG}></img>
            </div>
        )
    }
}

export default FourZeroFourPage; 