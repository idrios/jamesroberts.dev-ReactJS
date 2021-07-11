import React from 'react'

import { MathComponent } from 'mathjax-react';
import Post from '../Post/Post';

import './P1_11-jul-2021.css';

export default class P1_11Jul2021 extends Post{
    renderContent(){
        return <>
            <h1>Computing Pi</h1>
            <p>
            If you're like me, you learned about pi at some point in grade school as being a number
            that has to do with circles. Maybe you learned or memorized some common equations. 
            <ul class="no-bullets">
                <li>Diameter of a circle: <MathComponent tex={String.raw`D=2\pi r`} display={false}/></li>
                <li>Area of circle: <MathComponent tex={String.raw`A=\pi r^2`} display={false}/></li>
                <li>Surface area of a sphere: <MathComponent tex={String.raw`A=4 \pi r^2`} display={false}/></li>
                <li>Volume of a sphere: <MathComponent tex={String.raw`V=\frac{4}{3}\pi r^3`} display={false}/></li>
            </ul>
            Before getting into the actual computation of pi, let's explore those equations first. 
            &lt;Post in progress&rt;
            </p>
            <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />
        </>    
    }
} 