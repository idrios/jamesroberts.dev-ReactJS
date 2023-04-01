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
                  I'm a full stack software developer, originally from upstate New York but currently living
                  in Ohio. I write code with a focus on maintainability, following design principles that keep
                  a codebase simple to understand and build on. I studied biomedical imaging at Case Western 
                  and have an interest in building software for the biomedical space, but I enjoy working
                  on any problem that makes me a better developer. 
                </p>
                <h1>Contact</h1>
                <p>
                  I am currently looking for new projects to work on! Please reach out to me for inquiries. 
                </p>
                <p><b>email</b>: jimroberts10@gmail.com</p>
                <p>
                  Alternatively, if you're someone I've known before from my travels -- if you're a former coworker, 
                  one of my English students, airbnb roommate, WoW guildmate, your name is Clay -- please reach out!
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