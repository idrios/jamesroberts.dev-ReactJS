import React from 'react';
import {select, selectAll} from 'd3-selection';
import {range} from 'd3-array';


export default class CircleMason extends React.Component {
    constructor(props) {
        super(props); 
        this.width = 400;
        this.height = 400;
        this.radius = 100;
        this.state = {
            numRects: 10,
        };
    }
    updateRects(){
        // generate an array with length = numRects
        this.data = range(this.state.numRects);
        this.rectWidth = this.radius/this.state.numRects;

        // create a d3 selection for rect elements
        const rects = select(this.rect_g).selectAll('rect')
            .data(this.data);

        // enter = brand new elements
        rects.enter()
            .append('rect')
            .attr('width', this.rectWidth)
            .attr('height', this.height/2)
            .attr('y', 0)
            .attr('x', (d, i)=>{
                return i * this.rectWidth
            })
            .attr('fill', 'red')
            .attr('stroke', 'black')
            .transition()
            .attr('fill', 'white');

        // merge = elements that already exist
        rects.merge(rects)
            .attr('width', this.rectWidth)
            .attr('height', this.height/2)
            .attr('y', 0)
            .attr('x', (d, i)=>{
                return i * this.rectWidth
            })
            .attr('fill', 'white')
            .attr('stroke', 'black');

        // elements that are being removed
        rects.exit().transition().attr('height', 0).remove();

    }
    componentDidMount(){
        this.updateRects();
    }
    componentDidUpdate(){
        this.updateRects();
    }
    render(){
        return (
            <div>
                <input type='range' step="1" min="0" max="100" onChange={(event)=>{
                    this.setState({'numRects': event.target.value});
                }} value={this.state.numRects}></input>
                <div>{this.state.numRects}</div>
                <svg ref={(node)=>{this.svg = node;}}
                    height={this.height}
                    width={this.width}>
                    <g>
                        <circle 
                         cx={this.width/2}
                         cy={this.height/2}
                         r={this.radius}
                         fill='red'
                         ></circle>
                    </g>
                    <g ref={(node)=>{this.rect_g = node;}}/>
                </svg>
            </div>
        );
    }
}