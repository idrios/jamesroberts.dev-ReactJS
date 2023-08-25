import React from 'react'
import Project from '../Project/Project'
import VolquilGif from '../../../res/images/volquill-dot.gif'



export default class PhoneToDesktopSync extends Project{
    constructor(props){
        super(props)
        this.title="Mobile-to-Desktop Sync Service"
        this.date="2022-present"
    }

    renderContentBody(){
        return (
        <>
          <p>
            This project has been likened to "turning your phone into a wii remote". My vision is to 
            build a tool that makes it easier to work with 3D images or assets. I think a lot of 
            existing tools for working in 3D are daunting to learn and maybe a bit unintuitive, and
            I think your typical mobile phone, with all of its positional and rotational sensors, 
            should be able to act as a cursor in 3D space. 
          </p>
          <p>
            So far I've built an Android mobile app and a Python desktop app. 
          </p>
          <p>
            The desktop app consists of a TCP server, a pretty simple Tkinter GUI, and a lightweight, 
            event-based messaging system to support communication between services. The network service 
            uses asyncio to support multiple concurrent connections, and the event-messaging system 
            between services was built to ideally make plugins easy to integrate in the future.
          </p>
          <p>
            The android app runs a TCP client, and streams accelerometer data to the server.  
          </p>
          <img className='autoscale' src={VolquilGif}/>
          <p>
            Together, the two applications show a working proof of concept but the project still has a 
            significant ways to go. 
          </p>
          <br/>
        </>
        ); 
    }
} 