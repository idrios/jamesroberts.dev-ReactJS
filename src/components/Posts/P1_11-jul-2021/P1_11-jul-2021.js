import React from 'react'

import { MathComponent } from 'mathjax-react';
import { Button, TextField, Slider } from '@material-ui/core'
import Post from '../Post/Post';
import Circle from './Circle';
import CircleRightTriangle from './CircleRightTriangle'; 
import CirlceMason from './CircleMason'; 

import './P1_11-jul-2021.css';
import CircleMason from './CircleMason';

export default class P1_11Jul2021 extends Post{
    constructor(props){
        super(props)
        this.state = {
            circle:{
                r: 3,
                x: [1],
                y: [1]    
            },
            circleRightTriangle:{
                r: 3,
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

    windowResizeListener = (event) => {
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

    sliderUpdateCircleRightTriangleR = (event, newValue) => {
        this.setState({
            circleRightTriangle: {
                ...this.state.circleRightTriangle,
                r: newValue
            }
        });
    }

    renderContent(){
        return <div className="p1_11-jul-2021-container" ref={el => (this.container=el)}>
            <h1>Calculating the Value of Pi</h1>
            <p>
            If you <a href="https://en.wikipedia.org/wiki/Pi">look up Pi on Wikipedia</a> you'll find
            more information about Pi than you could ever know what to do with, including a number of 
            infinite-series algorithms derived by actual mathematicians that work better than the algorithm 
            I'm going to show you. However, I think the algorithm in this post is easier to understand
            than most. 
            </p>
            <p>
            Pi is defined as the ratio of the circumference of a circle to it's diameter, <MathComponent tex={String.raw`\pi=\frac CD`} display={false}/>.
            In terms of its radius, it's <MathComponent tex={String.raw`\pi=\frac C{2r}`} display={false}/>. 
            This constant ends up finding itself in a number of other useful equations as well. 
            </p>
            <ul className="no-bullets">
                <li>Area of circle: <MathComponent tex={String.raw`A=\pi r^2`} display={false}/></li>
                <li>Surface area of a sphere: <MathComponent tex={String.raw`A=4 \pi r^2`} display={false}/></li>
                <li>Volume of a sphere: <MathComponent tex={String.raw`V=\frac{4}{3}\pi r^3`} display={false}/></li>
            </ul>
            <p>
            Before getting into the actual computation of pi, let's explore those equations first. 
            </p>
            <p> Mason Help Me </p>
            <CircleMason />
            <p>
            Our approach to solving this will be to use a lot of distance formula. It'll be useful to us 
            to use cartesian coordinates, so one more formula that is helpful is the relationship between
            the radius of a circle and its coordiantes. 
            </p>
            <MathComponent tex={String.raw`r^2 = x^2 + y^2`} /> 
            <div className="graph-display">
                <Circle className="graph-display" 
                    r={this.state.circle.r} 
                    w_px={Math.min(this.state.dimens.width, 400)} 
                    h_px={Math.min(this.state.dimens.width, 400)}
                    />
            </div>
            <div className="math-input-fields">
                <Slider 
                    defaultValue={1.0}
                    min={0.0}
                    step={0.1}
                    max={10.0}
                    valueLabelDisplay="auto" 
                    onChange={this.sliderUpdateCircleR}
                    />
            </div>
            <p>
            ***Start with the definition of pi
            </p>
            <MathComponent tex={String.raw`\pi=\frac CD`}/>
            <p>
            ***Same equation, more useful representation
            </p>
            <MathComponent tex={String.raw`C=2\pi r`}/>
            <p>
            ***We want it in coordinates so this equation is also useful 
            </p>
            <MathComponent tex={String.raw`r^2 = x^2 + y^2`} /> 
            <p>
            Where, for a circle, r is a constant. 
            </p>
            <h2>Interlude: Area of a circle</h2>
            <p>
            Before actually calculating pi, I want to introduce the concept that we're going 
            to use, by deriving the equation for the area of a circle. 
            </p>
            <p>
            We can approximate the area of a circle using Riemann sums. The idea is we draw 
            a number of rectangles of constant, very small width and height that reaches the 
            circle. In other words, we'll choose a number rectangles, the width of each will 
            be <MathComponent tex={String.raw`\Delta x=\frac rn` } display={false}/>, and the 
            height of each will be from 0 to <MathComponent tex={String.raw`y=\sqrt {r^2-x^2}` } display={false}/>. 
            Taken together, the full area of the quadrant will be:
            </p> 
            <MathComponent tex={String.raw`A_{quadrant}=\sum_{i=1}^{n} y_i \Delta x`}/>
            <p>
            or
            </p>
            <MathComponent tex={String.raw`A_{quadrant}=\sum_{i=1}^{n} \sqrt {r^2-x_i^2} \Delta x`}/>
            <p>
            With the last step being to multiply that area by 4, because we've only calculated
            one quadrant. 
            </p>
            <MathComponent tex={String.raw`A_{circle}=4\sum_{i=1}^{n} \sqrt {r^2-x_i^2} \Delta x`}/>
            <div className="graph-display">
                <CircleRightTriangle
                    r={this.state.circleRightTriangle.r} 
                    w_px={Math.min(this.state.dimens.width, 400)} 
                    h_px={Math.min(this.state.dimens.width, 400)}
                    />
                <div className="vertical-slider">
                    <Slider 
                        orientation="vertical"
                        defaultValue={1.0}
                        min={0.0}
                        step={0.1}
                        max={10.0}
                        valueLabelDisplay="auto" 
                        aria-labelledby="vertical-slider"
                        onChange={this.sliderUpdateCircleRightTriangleR}
                        />
                </div>
            </div>
            <div className="math-input-fields">
                <Slider 
                    defaultValue={1.0}
                    min={0.0}
                    step={0.1}
                    max={10.0}
                    valueLabelDisplay="auto" 
                    onChange={this.sliderUpdateCircleRightTriangleR}
                    />
            </div>
            <p>
            We could stop here if we wanted to. The above equation approximates the area of 
            a circle really well. We live in a world that has computers. Any time you needed 
            to know the area of a circle, you could plug in values for r and n, calculate the 
            appropriate <MathComponent tex={String.raw`\Delta x` } display={false}/>,
            and then run it through a computer algorithm that uses this equation. 
            </p>
            <p>
            Forunately, we also live in a world that invented calculus. The above sum, if 
            we set <MathComponent tex={String.raw`\Delta x \approx 0` } display={false}/>,
            can be converted into an integral. 
            </p>
            <MathComponent tex={String.raw`A=4\int_0^r \sqrt {r^2-x^2} dx`}/>
            <p>
                This is pr
                &lt;Post in progress&gt;
            </p>
        </div>    
    }
} 