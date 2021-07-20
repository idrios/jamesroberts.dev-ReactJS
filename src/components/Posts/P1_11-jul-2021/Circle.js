import React from 'react';
import * as d3 from 'd3'; 

export default class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      r: '',
      circle: '',
      x_scale: '',
      y_scale: '',
    }
  }

  componentDidMount() {
    this.draw(); 
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.r); 
    if (prevProps.r !== this.props.r) {
       this.update();
    }
 }

  draw() {
    const r = Math.abs(this.props.r) || 0.0; 
    const xrange = this.props.xrange || [-10.0, 10.0];  
    const yrange = this.props.yrange || [-10.0, 10.0]; 
    const wpx = Math.abs(this.props.wpx) || 400; 
    const wpadpx = wpx/30; 
    const hpx = Math.abs(this.props.hpx) || 400; 
    const hpadpx = hpx/30;
    const rpx = (r*(wpx-(2*wpadpx)))/(xrange[1]-xrange[0]);

    // Append SVG
    const svg = d3.select(".d3-circle")
        .append("svg")
        .attr("width", wpx)
        .attr("height", hpx);

    // Create scale
    const xscale = d3.scaleLinear()
        .domain([d3.min([xrange[0], -r]), d3.max([xrange[1], r])])
        .range([wpadpx, wpx - wpadpx]);

    const yscale = d3.scaleLinear()
        .domain(yrange)
        .range([hpx - hpadpx, hpadpx]);

    // Add scale to axes
    const x_axis = d3.axisBottom()
        .scale(xscale) 
        
    const y_axis = d3.axisLeft()
        .scale(yscale);

    const x_axis_g = svg.append("g")
        .attr("transform", `translate(${wpx/2},0)`)
        .call(y_axis)
        .selectAll(".tick text")
        .filter((elem) => elem=="0")
        .text(""); ;

    const y_axis_g = svg.append("g")
        .attr("transform", `translate(0,${hpx/2})`)
        .call(x_axis)
        .selectAll(".tick text")
        .filter((elem) => elem=="0")
        .attr("transform", `translate(-10,0)`); 
    
    const circle = svg.append("circle")
      .attr("cx", wpx/2)
      .attr("cy", hpx/2)
      .attr("r", rpx)
      .attr("fill-opacity", "0.0")
      .attr("stroke", "red");

    const text = svg.append("text")
      .attr("transform", `translate(${wpx*0.15},${hpx*0.93})`)
      .attr("fill", "black")
      .attr("stroke", "black")
      .attr("visibility", "hidden")
      .text("You changed the size of the circle!")

    this.setState({
      r,
      circle,
      text
    })
  }

  update(){
    const r = Math.abs(this.props.r) || 0.0; 
    const xrange = this.props.xrange || [-10.0, 10.0]; 
    const wpx = Math.abs(this.props.wpx) || 400; 
    const wpadpx = wpx/30; 
    const rpx = (r*(wpx-(2*wpadpx)))/(xrange[1]-xrange[0]);
    
    this.state.circle
      .attr("r", rpx);
    
    this.state.text
      .attr("visibility", "visible");
  }

  render() {
    return (
      <div className="d3-circle">
      </div>
    )
  }
};