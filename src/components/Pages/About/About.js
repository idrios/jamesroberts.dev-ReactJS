import React, { Component } from 'react'; 
import Header from '../../Layout/Header/Header'; 
import Footer from '../../Layout/Footer/Footer'; 

class About extends Component {
    render(){
        return (
            <div className="page-container">
                <div>
                    <Header/>
                    <div className="page-content">
                        <div className="page-content-center">
                            <h1>About Page!</h1>
                            <p>This is the about page!</p>
                        </div>
                    </div>
                </div>
                <Footer className="page-footer"/>
            </div>
        );
    }
}

export default About; 