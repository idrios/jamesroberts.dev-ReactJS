import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import { Button, TextField } from '@material-ui/core'; 

import './Header.css'; 

class Header extends Component {
    render(){
        return (
            <>
                <div className="header-content-section">
                    <div className="header-content-top large-screen-hidden">
                        <h1>JamesRoberts.dev</h1>
                    </div>
                    <div className="header-content-bottom">
                        <div className="header-content-left">
                            <Button>Home</Button>
                            <Button>Posts</Button>
                            <Button>Demos</Button>
                            <Button>About</Button>
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