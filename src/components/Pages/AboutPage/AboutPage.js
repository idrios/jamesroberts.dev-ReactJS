import React from 'react'; 
import Page from '../Page/Page';
import { PAGE_NAMES } from '../../../res/constants/constants';  
import ResumePDF from '../../../res/files/james-roberts-resume'

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
                  I originally learned programming in 2011 as a means of doing computation for biomedical research, 
                  but I've since learned a number of different languages, frameworks, and paradigms in order to build more 
                  complex software systems. I write code with a focus on maintainability, following design principles
                  that keep a codebase simple to understand and build on. I'm particularly interested in building 
                  software to support biomedical research, but I also enjoy making games, working in education technology, or 
                  generally at any organization where I can learn new things.  
                </p>
                <h1>Contact</h1>
                <p>
                  I am currently looking for new projects to work on! Please reach out to me for inquiries. I also 
                  do free consultation, so feel free to reach out if you're looking for more opinions.  
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
                <h1>Resume</h1>
                <p>
                  <a href={ResumePDF}>download resume</a>
                </p>
            </div>
        );
    }
}

export default AboutPage; 