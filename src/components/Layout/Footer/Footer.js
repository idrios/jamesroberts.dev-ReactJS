import React, { Component } from 'react'; 

import './Footer.css'; 

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.visible = this.props.visible; 
    }

    render(){
        return !this.visible
            ? <></>
            : (
            <div className="footer">
                <p>Website last updated 2021</p>
            </div>
        )
    }
}