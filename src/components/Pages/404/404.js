import React, { Component } from 'react'; 
import Header from '../../Layout/Header'; 
import DogPNG from '../../../images/404-dog.png'; 

import './404.css'; 

class FourZeroFour extends Component {
    render(){
        return (
            <>
                <Header/>
                <div classname="page-content">
                    <div className="page-center-content">
                        <h1>404</h1>
                        <p>You are lost.</p>
                        <img src={DogPNG}></img>
                    </div>
                </div>
            </>
        )
    }
}

export default FourZeroFour; 