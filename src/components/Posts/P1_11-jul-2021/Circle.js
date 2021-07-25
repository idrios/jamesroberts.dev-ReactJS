import React from 'react';
import * as d3 from 'd3'; 

export default class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        r: Math.abs(this.props.r) || 0.0, 
        x_range: this.props.x_range || [-10.0, 10.0], 
        y_range: this.props.y_range || [-10.0, 10.0]
      },
      layout_params: {
        w_px: Math.abs(this.props.w_px) || 400,
        h_px: Math.abs(this.props.h_px) || 400,
      },
      d3: {
        svg: '',
        circle: '',
        x_axis: '',
        y_axis: ''
      }
    }
  }

  componentDidMount() {
    this.initialize(); 
  }

  componentDidUpdate(prevProps, prevState) { 
    if (prevProps.w_px != this.props.w_px || prevProps.h_px != this.props.h_px){
      this.updateSvg(); 
      this.updateAxes(); 
      this.updateCircle(); 
    }
    if (prevProps.x_range != this.props.x_range || prevProps.y_range != this.props.y_range){
      this.updateAxes(); 
    }
    if (prevProps.r !== this.props.r) {
      this.updateCircle();
    }
 }

  initialize() {
    const w_px = this.state.layout_params.w_px; 
    const h_px = this.state.layout_params.h_px; 
    const r = this.state.data.r; 
    const x_range = this.state.data.x_range;   
    const y_range = this.state.data.y_range; 
    const w_pad_px = w_px/30; 
    const h_pad_px = h_px/30;
    const r_px = (r*(w_px-(2*w_pad_px)))/(x_range[1]-x_range[0]);
    
    const x_scale = d3.scaleLinear()
      .domain([d3.min([x_range[0], -r]), d3.max([x_range[1], r])])
      .range([w_pad_px, w_px - w_pad_px]);
    const y_scale = d3.scaleLinear()
      .domain(y_range)
      .range([h_px - h_pad_px, h_pad_px]);
    const x_axis_component = d3.axisBottom()
      .scale(x_scale) 
    const y_axis_component = d3.axisLeft()
      .scale(y_scale) 

    const svg = d3.select(".d3-circle").append("svg")
      .attr("width", w_px)
      .attr("height", h_px);
    const x_axis = svg.append("g")
      .attr("class", "x_axis")
      .attr("transform", `translate(0,${h_px/2})`)
      .call(x_axis_component)
      .selectAll(".tick text")
      .filter((elem) => elem=="0")
      .attr("transform", `translate(-10,0)`);
    const y_axis = svg.append("g")
      .attr("class", "y_axis")
      .attr("transform", `translate(${w_px/2},0)`)
      .call(y_axis_component)
      .selectAll(".tick text")
      .filter((elem) => elem=="0")
      .text("");
    const circle = svg.append("circle")
      .attr("cx", w_px/2)
      .attr("cy", h_px/2)
      .attr("r", r_px)
      .attr("fill-opacity", "0.0")
      .attr("stroke", "red");

    this.setState({
      data_params: {
        r, 
        x_range, 
        y_range
      },
      layout_params: {
        w_px, 
        h_px,
        w_pad_px,
        h_pad_px
      },
      d3: {
        svg,
        circle,
        x_axis,
        y_axis
      }
    });
  }

  updateSvg(){
    if(!this.state.d3.svg){
      return; 
    }
    const w_px = Math.abs(this.props.w_px) || 400; 
    const h_px = Math.abs(this.props.h_px) || 400; 
    this.state.d3.svg
      .attr("width", w_px)
      .attr("height", h_px);
  }

  updateAxes(){
    if(!this.state.d3.x_axis || !this.state.d3.y_axis){
      return;
    }
    const w_px = Math.abs(this.props.w_px) || 400; 
    const h_px = Math.abs(this.props.h_px) || 400; 
    const w_pad_px = w_px/30; 
    const h_pad_px = h_px/30;
    const x_range = this.props.x_range || [-10.0, 10.0];  
    const y_range = this.props.y_range || [-10.0, 10.0]; 
    const r = this.props.r || this.state.data_params.r || 1.0; 

    const x_scale = d3.scaleLinear()
      .domain([d3.min([x_range[0], -r]), d3.max([x_range[1], r])])
      .range([w_pad_px, w_px - w_pad_px]);
    const x_axis_component = d3.axisBottom()
      .scale(x_scale) 
    const y_scale = d3.scaleLinear()
      .domain(y_range)
      .range([h_px - h_pad_px, h_pad_px]);
    const y_axis_component = d3.axisLeft()
      .scale(y_scale); 

    this.state.d3.svg.select(".x_axis")
      .attr("transform", `translate(0,${h_px/2})`)
      .call(x_axis_component)
      .selectAll(".tick text")
      .filter((elem) => elem=="0")
      .attr("transform", `translate(-10,0)`);

    this.state.d3.svg.select(".y_axis")
      .attr("transform", `translate(${w_px/2},0)`)
      .call(y_axis_component)
      .selectAll(".tick text")
      .filter((elem) => elem=="0")
      .text("");
  }

  updateCircle(){
    if(!this.state.d3.circle){
      return; 
    }
    const r = this.props.r || this.state.data_params.r || 1.0; 
    const w_px = this.props.w_px || this.state.data_params.w_px || 400; 
    const h_px = this.props.h_px || this.state.data_params.h_px || 400; 
    const w_pad_px = w_px/30; 
    const x_range = this.state.data_params.x_range || [-10.0, 10.0]; 
    const r_px = (r*(w_px-(2*w_pad_px)))/(x_range[1]-x_range[0]);
    this.state.d3.circle
      .attr("cx", w_px/2)
      .attr("cy", h_px/2)
      .attr("r", r_px)
      .attr("fill-opacity", "0.0")
      .attr("stroke", "red");
  }

  render() {
    return (
      <div className="d3-circle">
      </div>
    )
  }
};