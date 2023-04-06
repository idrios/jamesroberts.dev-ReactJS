import React from 'react'
import Project from '../Project/Project'



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
            This project has been likened to "turning your phone into a wii remote". I 
            don't want to announce too many further details about it at this time, 
            but the project has good momentum and I've learned a lot about computer networking
            while working on it. 
          </p>
          <br/>
        </>
        ); 
    }
} 