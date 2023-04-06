import React from 'react'
import Project from '../Project/Project'

import './JamesRobertsDotDev.css'



export default class JamesRobertsDotDev extends Project{
    constructor(props){
        super(props)
        this.title=<a href="https://jamesroberts.dev/projects">James<span className='hidden-space'> </span>Roberts<span className='hidden-space'> </span>.dev</a>
        this.date="2020-present"
    }

    renderContentBody(){
        return (
        <>
          <p>
            My website is a single-page React app built from scratch using <code>npx create-react-app</code>. It's a 
            static site hosted on github. The un-minified source code is 
            on <a href="https://github.com/idrios/jamesroberts.dev-ReactJS">my github profile</a>. 
          </p>
          <br/>
        </>
        ); 
    }
} 