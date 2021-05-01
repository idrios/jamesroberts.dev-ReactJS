import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Button, TextField } from '@material-ui/core'; 
import { PAGE_NAMES } from '../../../res/constants/constants'; 

import './Header.css'; 

class Header extends Component {
    constructor(props) {
        super(props);
        this.visible = this.props.visible; 
        this.pageSrc = this.props.pageSrc;  
        console.log(props); 
    }

    render(){
        console.log(this.pageSrc); 
        return !this.visible 
            ? <></>
            : (
            <div className="header">
                <div className="header-content-top large-screen-hidden">
                    <h1>JamesRoberts.dev</h1>
                </div>
                <div className="header-content-bottom">
                    <div className="header-content-left">
                        <Button component={ Link } to="/home" 
                            color={this.pageSrc===PAGE_NAMES.HOME ? "primary" : "default"}
                            variant={this.pageSrc===PAGE_NAMES.HOME ? "contained" : "text"}
                            >Home</Button>
                        <Button component={ Link } to="/posts"
                            color={this.pageSrc===PAGE_NAMES.POSTS ? "primary" : "default"}
                            variant={this.pageSrc===PAGE_NAMES.POSTS ? "contained" : "text"}
                            >Posts</Button>
                        <Button component={ Link } to="/demos"
                            color={this.pageSrc===PAGE_NAMES.DEMOS ? "primary" : "default"}
                            variant={this.pageSrc===PAGE_NAMES.DEMOS ? "contained" : "text"}
                            >Demos</Button>
                        <Button component={ Link } to="/about"
                            color={this.pageSrc===PAGE_NAMES.ABOUT ? "primary" : "default"}
                            variant={this.pageSrc===PAGE_NAMES.ABOUT ? "contained" : "text"}
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
        )
    }
}

export default Header; 