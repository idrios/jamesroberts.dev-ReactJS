import React from 'react'
import Project from '../Project/Project'
import ThumbnailPng from '../../../res/images/spacecube.png'
import DemoGif from '../../../res/images/spacecube-demo.gif'
import InfiniteGif from '../../../res/images/spacecube-infinite.gif'

import './SpaceCube.css'


export default class SpaceCube extends Project{
    constructor(props){
        super(props)
        this.thumbnail=ThumbnailPng
        this.title=<a href="https://play.google.com/store/apps/details?id=com.aqirna.spacecube">SpaceCube</a>
        this.date="2016"
        this.secondaryTitle=<span>Not to be confused with <a href='https://spacecube.nasa.gov'>NASA's 3D FPGA</a> or anything useful</span>
    }

    renderContentBody(){
        return (
        <>
          <p>
            SpaceCube was the first app I ever published to the android app store. It's an OpenGL cube renderer that 
            responds to motion gestures (onScroll, onFling) and spins a cube accordingly. It's been likened to fidget 
            spinners and I was once told that the rotation is more intuitive to use on mobile than the quaternion 
            rotations that an app like SolidWorks would use. The reviews are half from my friends and half from complete 
            strangers and I am extremely grateful for their praise. The "About" description is chaotic with the excited 
            feelings of successfully publishing my first app on an official store at 2am, years ago. To preserve history 
            I have no intentions of ever changing it. 
          </p>
          <br/>
          <div className='flex-row'>
            <img src={DemoGif} className='spacecube-android'/>
            <img src={InfiniteGif} className='spacecube-android'/>
          </div>
          <p>
            Please rate it 5 stars.  
          </p>
        </>
        ); 
    }
} 