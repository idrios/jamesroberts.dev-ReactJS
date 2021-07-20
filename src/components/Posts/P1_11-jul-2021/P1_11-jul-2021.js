import React from 'react'

import { MathComponent } from 'mathjax-react';
import { Button, TextField } from '@material-ui/core'
import Post from '../Post/Post';
import Circle from './Circle'

import './P1_11-jul-2021.css';

export default class P1_11Jul2021 extends Post{
    constructor(props){
        super(props)
        this.state = {
            circle:{
                r: 1,
                x: [1],
                y: [1]    
            }
        }
    }

    updateCircleR = (event) => {
        this.setState({
            circle: {
                ...this.state.circle,
                r: event.target.value
            }
        });
    }

    calculateCirclePlot = (event) => {
        var x = []; x[359] = 0; 
        var y = []; y[359] = 0; 
        for(var i = 0; i < 360; i++){
            x[i] = this.state.circle.r*Math.cos(i*Math.PI / 180); 
            y[i] = this.state.circle.r*Math.sin(i*Math.PI / 180); 
        }
        this.setState({
            circle: {
                ...this.state.circle,
                x, 
                y
            }
        });
    }

    renderContent(){
        return <>
            <h1>Computing Pi</h1>
            <p>
            If you're like me, you learned about pi at some point in grade school as being a number
            that has to do with circles. Maybe you learned or memorized some common equations. 
            </p>
            <ul className="no-bullets">
                <li>Diameter of a circle: <MathComponent tex={String.raw`D=2\pi r`} display={false}/></li>
                <li>Area of circle: <MathComponent tex={String.raw`A=\pi r^2`} display={false}/></li>
                <li>Surface area of a sphere: <MathComponent tex={String.raw`A=4 \pi r^2`} display={false}/></li>
                <li>Volume of a sphere: <MathComponent tex={String.raw`V=\frac{4}{3}\pi r^3`} display={false}/></li>
            </ul>
            <p>
            Before getting into the actual computation of pi, let's explore those equations first. 
            &lt;Post in progress&gt;
            </p>
            <div className="graph-with-math">
                <div className="math-input-fields">
                    <TextField id="p1_11-jul-2021 r" label="r" onChange={this.updateCircleR}/>
                    <Button id="p1_11-jul-2021 submit" onClick={this.calculateCirclePlot}>submit</Button>
                </div>
                <div className="math-input-fields">
                    <MathComponent tex={String.raw`x^2 + y^2 = r^2`} />
                    <Circle r={this.state.circle.r}/>
                </div>
            </div>
            <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />
        </>    
    }
} 