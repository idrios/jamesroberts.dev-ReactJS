import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 

class Header extends Component {
    render(){
        return (
            <div>
                <h1>JamesRoberts.dev</h1>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header; 