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
        this.showFooter = false; 
        this.pageName = PAGE_NAMES.DEFAULT;
    }

    render(){
        return (            
            <div className={"page-container background-"+this.pageName.toLowerCase()}>
                <div className="page-container-color-correction">
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
            <div className="page-content-body">
                {this.renderContentBody()}
            </div>
        )

    }

    renderContentBody(){
        return (
            <>
                <p>This is the default render method for a new page. Fill the contents of this page in whatever way you'd like! You can...</p>
                <ul>
                    <li>Override the <b>renderContentBody()</b> method to show page content with default page styling</li>
                    <li>Alternatively, override the <b>renderContent()</b> method to show page content with your own styling</li>
                    <li>Or just override the <b>render()</b> method entirely to show the page with maximum customizability</li>
                </ul>
                <p>Good luck with whatever you choose!</p>
            </>
        )
    }

}

export default Page;