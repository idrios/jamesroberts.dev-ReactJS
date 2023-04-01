import React from 'react';
import DefaultThumbnailJpg from '../../../res/images/no-script-dog.jpg'
import './Project.css';

class Project extends React.Component {
    constructor(props){
        super(props); 
        this.thumbnail = this.props.thumbnail || DefaultThumbnailJpg;
        this.title=this.props.title || "New Project"
        this.date=this.props.date || undefined
        this.secondaryTitle=this.props.secondaryTitle || undefined
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
          <div className="flex-row">
            <img className="project-thumbnail-large small-screen-hidden" src={this.thumbnail}/>
            <div className="flex-col">
              <div className="project-content-header">
                <img className="project-thumbnail-small large-screen-hidden" src={this.thumbnail}/>
                {this.renderContentHeader()}
              </div>
              <div className="project-content-body">
                  {this.renderContentBody()}
              </div>
            </div>
          </div>
        )
    }

    renderContentHeader(){
        return (
            <div className="flex-col">
              <h1>{this.title}   <span className='project-date'>({this.date})</span></h1>
              <h4 className='secondary-title'> 
                {this.secondaryTitle}
              </h4>
              <br/>
            </div>
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