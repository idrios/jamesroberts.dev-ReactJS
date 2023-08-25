import React from 'react'
import Project from '../Project/Project'
import ThumbnailPng from '../../../res/images/neurosegmenter.png'
import SegmentPng from '../../../res/images/neurosim-3d-segments.png';

import './NeuroSegmenter.css'



export default class NeuroSegmenter extends Project{
    constructor(props){
        super(props)
        this.thumbnail=ThumbnailPng
        this.title="Neural Segmenter"
        this.date="2016"
        this.secondaryTitle=<span>A tool for aiding 3D image volume segmentation (unfinished)</span>
    }

    renderContentBody(){
        return (
        <>
          <p>
            The source of the data comes from the 2016 <a href="https://cremi.org/">CREMI challenge</a>, an open 
            challenge to ML researchers to write an algorithm that can translate a massive volume of raw voxel
            images into useful data. The images are electron microscopy data for a fully scanned drosophila 
            neurosystem, the goal was to map the entire connectome. I attempted to take part in this challenge; 
            I had recently completed Andrew Ng's <a href="https://www.coursera.org/learn/machine-learning">
            coursera course on Machine Learning</a> and wanted to test what I had learned. 
          </p>
          <br/>
          <p>
            I didn't produce a working algorithm, so you won't find my name on the CREMI leaderboard.
          </p>
          <p>
            If you've taken a machine learning or deep learning course, there's a decent chance you've run
            into the <a href="https://en.wikipedia.org/wiki/MNIST_database">MNIST dataset</a>, a massive collection 
            of hand-written numbers that is often used for introducing the concept of computer vision. I had 
            a program that could learn the different numbers from labeled images, and then make predictions 
            about what it thought the number in unlabeled images might be represented. It was a very standard, 
            generic intro-to-computer-vision algorithm. I haphazardly threw this algorithm against the CREMI 
            3D image volume (or rather, I ran the algorithm against every 2D cross-section in the 3D volume) and
            it just.. didn't make sense to do that. One of the challenges of this problem was that images were
            in 3D rather than 2D. But that issue was minor compared to the much more fundamental challenge 
            that neurons are amorphous. The algorithm I was running was good for classifying shapes, and I was
            basically asking it to look at an image of spaghetti noodles and untangle them. 
          </p>
          <p>
            I gave up on the machine learning problem for until I could have a better intuition about it. 
            Unlike other aspects of software or engineering, it's hard to know if your approach to an ML problem
            will work until you've tried it. I've read someone liken ML to engineering bridges. 
            In civil engineering, there are various known approaches like using arches of various radii, 
            using suspension bridges, pillars, etc. But it wasn't until calculus was invented that we could 
            actually use math to calculate the optimal dimensions of a bridge. Likewise, we don't have any
            algorithm yet for choosing an optimal ML approach, so it's still a bit more of an art than a 
            science. I didn't have the right eye for it yet, and wasn't ready to beat my head against the wall 
            fighting failure in this area. 
          </p>
          <br/>
          <img className='neuron-image' src={SegmentPng}/>
          <p className='remark'>Left: neuron vectorized with matlab's 
            built-in <a href="https://www.mathworks.com/help/matlab/ref/isosurface.html">isosurface</a>; Right: 
            neuron vectorized by my own algorithm</p>
          <br/>
          <p>
            Before shelving this project entirely however, I messed around with a few things. I made a matlab GUI
            for scrolling through the 3D volumes and applying various filters like variance, threshold, or a custom 
            convolution matrix. 
          </p>
          <br/>
          <p>
            I also tried my hand at writing a quick algorithm for converting each of the different neurons into 
            its own 3D vector. The built-in matlab "isosurface" mesh algorithm is of course more accurate, but I 
            did end up creating a decent compression algorithm for vectorizing voxel images.
          </p>
          <br/>
          <p>
            This project posed as the impetus for a number of other projects. There were performance issues I faced
            while trying to visualize the data which motivated me to get deeper into how to use a GPU for programming. 
            The limited size of training data motivated me to seek ways to speed up manual 3D volume segmentation, 
            which has inspired some of my other projects. But I still haven't touched this project at all since 2016. 
          </p>
          <br/>
          <p>
            The organizers of CREMI, on the other hand, completed their drosophila brain scan, segmented 
            it, <a href="https://www.cell.com/cell/fulltext/S0092-8674(18)30787-6">published their results</a>, 
            open sourced a <a href="https://catmaid-fafb.virtualflybrain.org/">map of the raw scan data</a> and 
            open-sourced an <a href="https://virtualflybrain.org/">interactive map of the fly's neural anatomy</a>. 
            If you've read all the way to the end of this post, do check out their work. It is so cool.
          </p>
          <br/>
        </>
        ); 
    }
} 