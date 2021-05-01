import React, { Component } from 'react'; 
import Header from '../../Layout/Header/Header'; 
import Footer from '../../Layout/Footer/Footer'; 
import { PAGE_NAMES } from '../../../res/constants/constants';

import './Page.css'; 

/**
 * @function renderContent() - render method of the component
 * @param showHeader - show or hide header component (default true)
 * @param showFooter - show or hide footer component (default true)
 * @param pageName - name of the page (used for determining which item to highlight in the header)
 */
class Page extends Component {
    constructor(props){
        super(props); 
        this.showHeader = true; 
        this.showFooter = true; 
        this.pageName = PAGE_NAMES.DEFAULT;
    }

    render(){
        return (            
            <div className="page-container">
                <div>
                    <Header pageSrc={this.pageName} visible={this.showHeader}/>
                    <div className="page-content">
                        {this.renderContent()}
                    </div>
                </div>
                <Footer visible={this.showFooter}/>
            </div>
        )
    }

    renderContent(){
        return (
            <h1>Override the "renderContent()" method to show your page</h1>
        )

    }

}

export default Page;