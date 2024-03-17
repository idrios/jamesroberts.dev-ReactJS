import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';  
import Button from '@mui/material/Button';
import { PAGE_NAMES } from '../../../res/constants/constants'; 
import SiteTitleSVG from '../../../res/images/site-title.svg'; 
import {
  setSvgFilterPrevCssPropertyToCurrentSvgFilterCssProperty, 
  toggleTheme
} from '../../../providers/theme'; 

import './Header.css'; 

class Header extends Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount(){
        document.getElementById(this.pageSrc)?.focus(); 
    }

    componentWillUnmount(){
      try{
        setSvgFilterPrevCssPropertyToCurrentSvgFilterCssProperty()
      }
      catch(e){
        console.error(`svg-related error :: ${e.message}`)
      }
    }

    toggleTheme = () => {
      toggleTheme()
      this.setState({theme: getCurrentTheme()})
    }

    tabs = {
      home: <Button component={ Link } to="/" 
        id={PAGE_NAMES.HOME}
        color={this.props.pageSrc===PAGE_NAMES.HOME ? "primary" : "inherit"}
        variant={this.props.pageSrc===PAGE_NAMES.HOME ? "contained" : "text"}
        onKeyDown={ev => {
            if(ev.key === 'ArrowRight') document.getElementById(PAGE_NAMES.PROJECTS).focus()}
        }
        >Home</Button>, 
      posts: <Button component={ Link } to="/posts"
        id={PAGE_NAMES.POSTS}
        color={this.props.pageSrc===PAGE_NAMES.POSTS ? "primary" : "inherit"}
        variant={this.props.pageSrc===PAGE_NAMES.POSTS ? "contained" : "text"}
        onKeyDown={ev => {
            if(ev.key === 'ArrowLeft') document.getElementById(PAGE_NAMES.HOME).focus(); 
            else if(ev.key === 'ArrowRight') document.getElementById(PAGE_NAMES.PROJECTS).focus()}
        }
        >Posts</Button>, 
      projects: <Button component={ Link } to="/projects"
        id={PAGE_NAMES.PROJECTS}
        color={this.props.pageSrc==="projects" ? "primary" : "inherit"}
        variant={this.props.pageSrc==="projects" ? "contained" : "text"}
        onKeyDown={ev => {
            if(ev.key === 'ArrowLeft') document.getElementById(PAGE_NAMES.HOME).focus(); 
            else if(ev.key === 'ArrowRight') document.getElementById(PAGE_NAMES.ABOUT).focus()}
        }
        >Projects</Button>, 
      about: <Button component={ Link } to="/about"
        id={PAGE_NAMES.ABOUT}
        color={this.props.pageSrc==="about" ? "primary" : "inherit"}
        variant={this.props.pageSrc==="about" ? "contained" : "text"}
        onKeyDown={ev => {
            if(ev.key === 'ArrowLeft') document.getElementById(PAGE_NAMES.PROJECTS).focus(); 
            else if(ev.key === 'ArrowRight') document.getElementById("themes").focus()}
        }
        >About</Button>,
      themes: <Button
        onClick={toggleTheme}
        id={"themes"}
        color={"inherit"}
        variant={"text"}
        onKeyDown={ev => {
            if(ev.key === 'ArrowLeft') document.getElementById(PAGE_NAMES.ABOUT).focus()}
        }
        >Themes</Button>

    }

    render(){
        return !this.props.visible 
            ? <></>
            : (
            <div className="header">
                <div className="header-content-top large-screen-hidden">
                    <img className="svg-icon svg-animate" src={SiteTitleSVG}/>
                </div>
                <div className="header-content-bottom">
                    <div className="header-content-left">
                        {this.tabs.home}, 
                        {this.tabs.projects}, 
                        {this.tabs.about}
                    </div>
                    <div className="header-content-center small-screen-hidden">
                        <img className="svg-icon svg-animate" src={SiteTitleSVG}/>
                    </div>
                    <div className="header-content-right">
                      {this.tabs.themes}
                    </div>
                </div>            
            </div>
        )
    }
}

export default Header; 