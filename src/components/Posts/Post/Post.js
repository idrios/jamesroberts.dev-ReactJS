import React from 'react';
import './Post.css';

/**
 * A post has a required prop called "config" with all optional parameters "title", "date", and "content" 
 */
class Post extends React.Component {
    constructor(props){
        super(props); 
        if(!this.props.content){
            return; 
        }
        console.log(this.props.content); 
        this.content = this.props.content;
    }

    render(){
        return (            
            <div className="post-container">
                <div className="post-content">
                    {this.renderContent()}
                </div>
            </div>
        )
    }

    renderContent(){
        return (
            <div className="post-content-body">
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
export default Post; 