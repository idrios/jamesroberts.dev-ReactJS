import React from 'react';
import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';

import './AboutPage.css'

class AboutPage extends Page {
    constructor(props){
        super(props)
        this.pageName = PAGE_NAMES.ABOUT;
    }
    renderContentBody(){
        return (
            <div className='about'>
                <h1>About</h1>
                <p>
                  I've been programming since 2011, originally with Java and Matlab learning how to do things related to 
                  biomedical research, but in 2015 I began self-studying Android development and full stack web development.                  

                  I'm a full stack and mobile developer who specializes in Android (Java, Kotlin, or React Native) and web 
                  development (React and vanilla javascript). 

                  I'm particularly interested in building software to support biomedical research, but I also enjoy making 
                  games, working in education technology, or generally at any organization where I can learn new things.
                </p>
                <h1>Contact</h1>
                <p><b>email</b>: jimroberts10@gmail.com</p>
                <p>
                  If you're someone I've known before from my travels -- if you're a former coworker, a former student from
                  when I taught English, an airbnb roommate, WoW guildmate, your name is Clay -- please reach out!
                </p>
                <h1>Skills</h1>
                <p>
                  C#, Python, Kotlin, Java, Javascript, Typescript, Matlab, Simulink, Labview, SQL, HTML, CSS, Git, React, Webpack, Antd,
                  Material UI, NodeJS, d3js, ASP.NET, SignalR, Selenium, ffmpeg, Unity, OpenGL, WebGL, Shadertoy, Jest, Junit, Xunit,
                  Android SDK, REST, DDD, MVC, CI/CD, Statistics, Biomedical Imaging, Physics, Electrical Engineering 
                </p>
            </div>
        );
    }
}

export default AboutPage;