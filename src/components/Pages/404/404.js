import React, { Component } from 'react'; 
import Header from '../../Layout/Header/Header'; 
import Footer from '../../Layout/Footer/Footer'; 
import DogPNG from '../../../images/404-dog.png'; 

import './404.css'; 

class FourZeroFour extends Component {
    render(){
        return (
            <div className="page-container">
                <div>
                    <Header/>
                    <div className="page-content">
                        <div className="page-content-center">
                            <h1>404</h1>
                            <p>You are lost.</p>
                            <img src={DogPNG}></img>
                        </div>
                    </div>
                </div>
                <Footer className="page-footer"/>
            </div>
        )
    }
}

export default FourZeroFour; 