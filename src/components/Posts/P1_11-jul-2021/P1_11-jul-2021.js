import React from 'react'

import { MathComponent } from 'mathjax-react';
import { Button, TextField, Slider } from '@material-ui/core'
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
            },
            dimens:{
                width: 0
            }
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.windowResizeListener); 
        this.setState({
            dimens: {
                width: this.container.offsetWidth
            }
        }); 
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.windowResizeListener); 
    }

    textFieldUpdateCircleR = (event) => {
        this.setState({
            circle: {
                ...this.state.circle,
                r: event.target.value
            }
        });
    }

    windowResizeListener = (event) => {
        console.log(this.container.offsetWidth); 
        this.setState({
            dimens: {
                width: this.container.offsetWidth
            }
        }); 
    }

    sliderUpdateCircleR = (event, newValue) => {
        this.setState({
            circle: {
                ...this.state.circle,
                r: newValue
            }
        });
    }

    renderContent(){
        console.log(this.state.dimens.width)
        return <div className="p1_11-jul-2021-container" ref={el => (this.container=el)}>
            <h1>Computing Pi</h1>
            <p>
            If you're like me, you learned about pi at some point in grade school as being a number
            that has to do with circles. Maybe you learned or memorized some common equations. 
            </p>
            <ul className="no-bullets">
                <li>Diameter of a circle: <MathComponent tex={String.raw`C=2\pi r`} display={false}/></li>
                <li>Area of circle: <MathComponent tex={String.raw`A=\pi r^2`} display={false}/></li>
                <li>Surface area of a sphere: <MathComponent tex={String.raw`A=4 \pi r^2`} display={false}/></li>
                <li>Volume of a sphere: <MathComponent tex={String.raw`V=\frac{4}{3}\pi r^3`} display={false}/></li>
            </ul>
            <p>
            Before getting into the actual computation of pi, let's explore those equations first. 
            
            </p>
            <div className="graph-with-math">
                <div className="math-input-fields">
                    <TextField id="p1_11-jul-2021 r" label="r" onChange={this.textFieldUpdateCircleR}/>
                    <Slider 
                        defaultValue={1.0}
                        min={0.0}
                        step={0.1}
                        max={10.0}
                        valueLabelDisplay="auto" 
                        onChange={this.sliderUpdateCircleR}
                        />
                </div>
                <div className="graph-display">
                    <MathComponent tex={String.raw`x^2 + y^2 = r^2`} />
                    <Circle 
                        r={this.state.circle.r} 
                        w_px={Math.min(this.state.dimens.width, 400)} 
                        h_px={Math.min(this.state.dimens.width, 400)}
                        />
                </div>
            </div>
            <MathComponent tex={String.raw`C = 2\pi r`} />
            <p>
                This is pr
                &lt;Post in progress&gt;
            </p>
        </div>    
    }
} 