import React from 'react'
import Project from '../Project/Project';
import ThumbnailPng from '../../../res/images/spacecube.png';



export default class SpaceCube extends Project{
    constructor(props){
        super(props)
        this.thumbnail=ThumbnailPng
    }

    renderContentBody(){
        return (
        <>
            <h1><a href='https://play.google.com/store/apps/details?id=com.aqirna.spacecube'>SpaceCube   <span className='project-date'>(2016)</span></a></h1>
            <h4 className='secondary-title'> 
              Not to be confused with <a href='https://spacecube.nasa.gov'>NASA's 3D FPGA</a> or anything useful
            </h4>
            <br/>
            <br/>
            <p>
              SpaceCube was the first android app I ever published to the android app store. It holds a place close to my 
                heart because my friends raided it with positive reviews. It's an OpenGL cube renderer that responds to motion 
                gestures (onScroll, onFling) and rotates a cube accordingly. It's been likened to fidget spinners and I was once
                told that the rotation is more intuitive to use on mobile than the quaternion rotations that an app like
                SolidWorks would use. The "About" description of the app is chaotic with the giddy and excited feelings of
                successfully publishing my first app on an official store at 2am, so many years ago. To preserve history I have 
                no intentions of ever changing it. 
            </p>
            <br/>
            <p>
              Please rate it 5 stars.  
            </p>
        </>
        ); 
    }
} 