import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Button } from '@material-ui/core'; 
import { PAGE_NAMES } from '../../../res/constants/constants'; 
import SiteTitleSVG from '../../../res/images/site-title.svg'; 

import './Header.css'; 

class Header extends Component {
    constructor(props) {
        super(props);
        this.visible = this.props.visible; 
        this.pageSrc = this.props.pageSrc;
    }

    componentDidMount(){
        document.getElementById(this.pageSrc)?.focus(); 
    }

    render(){
        return !this.visible 
            ? <></>
            : (
            <div className="header">
                <div className="header-content-top large-screen-hidden">
                    <img src={SiteTitleSVG}/>
                </div>
                <div className="header-content-bottom">
                    <div className="header-content-left">
                        <Button component={ Link } to="/" 
                            id={PAGE_NAMES.HOME}
                            color={this.pageSrc===PAGE_NAMES.HOME ? "primary" : "default"}
                            variant={this.pageSrc===PAGE_NAMES.HOME ? "contained" : "text"}
                            onKeyDown={ev => {
                                if(ev.key === 'ArrowRight') document.getElementById(PAGE_NAMES.POSTS).focus()}
                            }
                            >Home</Button>
                        <Button component={ Link } to="/posts"
                            id={PAGE_NAMES.POSTS}
                            color={this.pageSrc===PAGE_NAMES.POSTS ? "primary" : "default"}
                            variant={this.pageSrc===PAGE_NAMES.POSTS ? "contained" : "text"}
                            onKeyDown={ev => {
                                if(ev.key === 'ArrowLeft') document.getElementById(PAGE_NAMES.HOME).focus(); 
                                else if(ev.key === 'ArrowRight') document.getElementById(PAGE_NAMES.DEMOS).focus()}
                            }
                            >Posts</Button>
                        <Button component={ Link } to="/demos"
                            id={PAGE_NAMES.DEMOS}
                            color={this.pageSrc==="demos" ? "primary" : "default"}
                            variant={this.pageSrc==="demos" ? "contained" : "text"}
                            onKeyDown={ev => {
                                if(ev.key === 'ArrowLeft') document.getElementById(PAGE_NAMES.POSTS).focus(); 
                                else if(ev.key === 'ArrowRight') document.getElementById(PAGE_NAMES.ABOUT).focus()}
                            }
                            >Demos</Button>
                        <Button component={ Link } to="/about"
                            id={PAGE_NAMES.ABOUT}
                            color={this.pageSrc==="about" ? "primary" : "default"}
                            variant={this.pageSrc==="about" ? "contained" : "text"}
                            onKeyDown={ev => {
                                if(ev.key === 'ArrowLeft') document.getElementById(PAGE_NAMES.DEMOS).focus(); 
                                else if(ev.key === 'ArrowRight') document.getElementById("themes").focus()}
                            }
                            >About</Button>
                    </div>
                    <div className="header-content-center small-screen-hidden">
                        <img src={SiteTitleSVG}/>
                    </div>
                    <div className="header-content-right">
                        <Button
                            id={"themes"}
                            onKeyDown={ev => {
                                if(ev.key === 'ArrowLeft') document.getElementById(PAGE_NAMES.ABOUT).focus()}
                            }
                        >Themes</Button>
                    </div>        
                </div>                    
            </div>
        )
    }
}
  

export default Header; 