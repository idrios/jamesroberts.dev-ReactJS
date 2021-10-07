import React from 'react'
import Post from '../Post/Post';

import './_7-oct-2021.css';


export default class _7Oct2021 extends Post{
    constructor(props){
        super(props)
        this.state = {
            circle:{
                r: 3,
                x: [1],
                y: [1]    
            },
            dimens:{
                width: 0
            }
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.windowResizeListener); 
        this.setState({
            dimens: {
                width: this.container.offsetWidth
            }
        }); 
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.windowResizeListener); 
    }

    windowResizeListener = (event) => {
        this.setState({
            dimens: {
                width: this.container.offsetWidth
            }
        }); 
    }

    sliderUpdateCircleR = (event, newValue) => {
        this.setState({
            circle: {
                ...this.state.circle,
                r: newValue
            }
        });
    }

    renderContentBody(){
        return (
        <div ref={el => (this.container=el)}>
            <h1>Hello World!</h1>
            <p> 
                I've spent way too much time trying to come up with a clever first post, 
                and it's been holding me up from working on things that I actually want to be
                working on, so here's my simple, boring, hello world for my website. 
            </p>
        </div>
        ); 
    }
} 