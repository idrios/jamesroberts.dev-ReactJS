import React from 'react';
import DefaultThumbnailJpg from '../../../res/images/no-script-dog.jpg'
import './Project.css';

class Project extends React.Component {
    constructor(props){
        super(props); 
        if(!this.props.content){
            return; 
        }
        this.thumbnail = this.props.thumbnail || DefaultThumbnailJpg;
        this.content = this.props.content;
    }

    render(){
        return (            
            <div className="project-container">
                <div className="project-content">
                    {this.renderContent()}
                </div>
            </div>
        )
    }

    renderContent(){
        return (
          <>
            <img className="project-thumbnail" src={this.thumbnail}/>
            <div className="project-content-body">
                {this.renderContentBody()}
            </div>
          </>
        )

    }

    renderContentBody(){
        return (
            <>
                <p>
                  This is the default render method for a new project. Fill the contents of this page in whatever way you'd like! You can...
                </p>
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
export default Project; 