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
            This is a passion project of mine. The 
            source of the data comes from the 2016 <a href="https://cremi.org/">CREMI challenge</a>, an open 
            challenge to ML researchers to write an algorithm that can translate a massive volume of raw voxel
            images into useful data. The images are electron microscopy data for a fully scanned drosophila 
            neurosystem, the goal was to map the entire connectome. I attempted to take part in this challenge; 
            I had recently completed Andrew Ng's <a href="https://www.coursera.org/learn/machine-learning">
            coursera course on Machine Learning</a> and wanted to test if I had learned anything. 
          </p>
          <br/>
          <p>
            I failed the challenge. In fact, I failed it so hard that it broke my computer. I don't know exactly
            what went wrong, just that my ML algorithm was using 100% of my RAM for a long time, the computer 
            froze, and after rebooting I could not escape the bios (I did manage to get my files off the hard 
            drive though). So you won't find my name on the CREMI leaderboard.
          </p>
          <br/>
          <p>
            While reflecting on the challenge, I came to a few conclusions.
          </p>
          <ul>
            <li><i>I needed to define better parameters</i></li>
              At its core, all that a machine learning algorithm does is solve the problem of: "given some
              massive collection of X inputs, what's the probability of Y output". I had tried to reuse the
              code from my intro ML course that learns numbers from a training set of hand drawn images. that
              code was not really reusable in this context because it was designed for recognizing shapes,
              and the neurons are amorphous. Still, I was hoping that by just throwing ideas at the wall, 
              I would start to develop an intuition on how to use ML to segment these 3D images. I felt 
              that I could have improved the algorithm by passing more filtered image data as inputs; like 
              thresholding it, or using different convolution filters. But my mental model wasn't quite there. 
            <li><i>There needed to be more training data</i></li>
              There were only 3 volumes of training data. While I'm quite certain my algorithm was never going 
              to be successful at segmenting the rest of the volume set, I believe there must have been a 
              significant number of situations not reflected by the training set. Mitochondria seemed to often
              have features that would make it easily mistakeable for a small neuron, or vice versa. Far worse, 
              one of the other criterias -- "synaptic cleft detection" -- was impossible for <i>me</i> to 
              distinguish from the training data. I tried searching scientific literature for how to read 3D 
              volumes of neurosystems, and I couldn't find anything useful. This seemed like an area that you needed
              first-hand experience with, where it's merely second nature to any labs doing this research and 
              completely foreign to outsiders. 
            <li><i>Machine Learning is an indeterminate process and I should abandon this project until I have 
              better financial stability</i></li>
              Unlike other aspects of software or engineering, it's incredibly hard to know if your approach to 
              an ML problem will work until you've tried it. I've read someone liken ML to engineering bridges. 
              In civil engineering, there are various known approaches like using arches of various radii, 
              using suspension bridges, pillars, etc. But it wasn't until calculus was invented that we could 
              actually use math to figure out the optimal dimensions of a bridge. Likewise, we don't have any
              algorithm yet for choosing an optimal ML approach, so it's still a bit more of an art than a 
              science. I didn't have the right eye for it yet, and in 2016 I needed a job so I didn't have 
              time to beat my head against the wall fighting failure in this area. 
          </ul>
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
            its own 3D vector. The built-in matlab "isosurface" mesh algorithm is pretty strictly superior to my 
            attempt, but I think given enough time I could write a better one that focuses on finding local minima
            and maxima.
          </p>
          <br/>
          <p>
            This project posed as the impetus for a number of other projects. The performance issues (from breaking
            my computer) motivated me to get deeper into graphics programming, which did inadvertently lead to 
            SpaceCube. The limited size of training data motivated me to seek ways to speed up manual 3D volume segmentation, 
            which has inspired some of my other projects. But I still haven't touched this project at all since 2016. 
          </p>
          <br/>
          <p>
            The organizers of CREMI, on the other hand, completed their drosophila brain scan, segmented 
            it, <a href="https://www.cell.com/cell/fulltext/S0092-8674(18)30787-6">published their results</a>, 
            open sourced a <a href="https://catmaid-fafb.virtualflybrain.org/">map of the raw scan data</a>and 
            open-sourced an <a href="https://virtualflybrain.org/">interactive map of the fly's neural anatomy</a>. 
            If you've read all the way to the end of this post, do check out their work. It is so cool.
          </p>
          <br/>
        </>
        ); 
    }
} 