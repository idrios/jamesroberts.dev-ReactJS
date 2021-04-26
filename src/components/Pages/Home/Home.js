import React, { Component } from 'react'; 
import Header from '../../Layout/Header/Header'; 
import Footer from '../../Layout/Footer/Footer'; 

class Home extends Component {
    render(){
        return (            
            <div className="page-container">
                <div>
                    <Header src="home"/>
                    <div className="page-content">
                        <h1>Home page!</h1>
                    </div>
                </div>
                <Footer className="page-footer"/>
            </div>
        )
    }
}

export default Home;