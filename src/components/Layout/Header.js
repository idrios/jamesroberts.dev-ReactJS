import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Button, TextField } from '@material-ui/core'; 

import './Header.css'; 

class Header extends Component {
    constructor() {
        super(); 
    }

    render(){
        return (
            <>
                <div className="header-content-section">
                    <div className="header-content-top large-screen-hidden">
                        <h1>JamesRoberts.dev</h1>
                    </div>
                    <div className="header-content-bottom">
                        <div className="header-content-left">
                            <Button component={ Link } to="/home" 
                                color={this.props.src==="home" ? "primary" : "default"}
                                variant={this.props.src==="home" ? "contained" : "default"}
                                >Home</Button>
                            <Button component={ Link } to="/posts"
                                color={this.props.src==="posts" ? "primary" : "default"}
                                variant={this.props.src==="posts" ? "contained" : "default"}
                                >Posts</Button>
                            <Button component={ Link } to="/demos"
                                color={this.props.src==="demos" ? "primary" : "default"}
                                variant={this.props.src==="demos" ? "contained" : "default"}
                                >Demos</Button>
                            <Button component={ Link } to="/about"
                                color={this.props.src==="about" ? "primary" : "default"}
                                variant={this.props.src==="about" ? "contained" : "default"}
                                >About</Button>
                        </div>
                        <div className="header-content-center small-screen-hidden">
                            <h1>JamesRoberts.dev</h1>
                        </div>
                        <div className="header-content-right">
                            <Button>Themes</Button>
                        </div>        
                    </div>                    
                </div>
            </>
        )
    }
}

export default Header; 