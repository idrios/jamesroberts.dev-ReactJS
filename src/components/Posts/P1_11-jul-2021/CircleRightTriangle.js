import React from 'react';
import * as d3 from 'd3'; 

export default class CircleRightTriangle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        r: Math.abs(this.props.r) || 3.0, 
        x_range: this.props.x_range || [-10.0, 10.0], 
        y_range: this.props.y_range || [-10.0, 10.0]
      },
      layout_params: {
        w_px: Math.abs(this.props.w_px) || 400,
        h_px: Math.abs(this.props.h_px) || 400,
      },
      d3: {
        svg: '',
        x_axis: '',
        x_axis_label: '',
        y_axis: '',
        circle: '',
        r_x: '',
        r_y: '',
        r_vec: ''
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

    const svg = d3.select(this.svg).append("svg")
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
    const x_axis_label = svg.append("text")
      .attr("transform", `translate(${w_px-w_pad_px+5}, ${(h_px/2)+5})`)
      .text("x")
      .attr("font-size", "12")
      .attr("font-family", "sans-serif");
    const y_axis_label = svg.append("text")
      .attr("transform", `translate(${(w_px/2)-3}, ${(h_pad_px)-5})`)
      .text("y")
      .attr("font-size", "12")
      .attr("font-family", "sans-serif")
    const circle = svg.append("circle")
      .attr("cx", w_px/2)
      .attr("cy", h_px/2)
      .attr("r", r_px)
      .attr("fill-opacity", "0.0")
      .attr("stroke", "red");
    const r_x = svg.append("line")
        .style("stroke", "blue")
        .attr("x1", w_px/2)
        .attr("y1", h_px/2)
        .attr("x2", (w_px/2)+(r_px/Math.sqrt(2.0)))
        .attr("y2", h_px/2);
    const r_y = svg.append("line")
        .style("stroke", "blue")
        .attr("x1", (w_px/2)+(r_px/Math.sqrt(2.0)))
        .attr("y1", h_px/2)
        .attr("x2", (w_px/2)+(r_px/Math.sqrt(2.0)))
        .attr("y2", (h_px/2)-(r_px/Math.sqrt(2.0)));
    const r_vec = svg.append("line")
      .style("stroke", "blue")
      .attr("x1", w_px/2)
      .attr("y1", h_px/2)
      .attr("x2", (w_px/2)+(r_px/Math.sqrt(2.0)))
      .attr("y2", (h_px/2)-(r_px/Math.sqrt(2.0)));

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
        x_axis,
        x_axis_label,
        y_axis,
        y_axis_label,
        circle,
        r_x,
        r_y,
        r_vec
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
    const r = this.props.r || this.state.data_params.r; 

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
    
    this.state.d3.x_axis_label
      .attr("transform", `translate(${w_px-w_pad_px+5}, ${(h_px/2)+5})`)

    this.state.d3.svg.select(".y_axis")
      .attr("transform", `translate(${w_px/2},0)`)
      .call(y_axis_component)
      .selectAll(".tick text")
      .filter((elem) => elem=="0")
      .text("");

    this.state.d3.y_axis_label
      .attr("transform", `translate(${(w_px/2)-3}, ${(h_pad_px)-5})`)

  }

  updateCircle(){
    if(!this.state.d3.circle){
      return; 
    }
    const r = this.props.r || this.state.data_params.r; 
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

    this.state.d3.r_x
        .attr("x1", w_px/2)
        .attr("y1", h_px/2)
        .attr("x2", (w_px/2)+(r_px/Math.sqrt(2.0)))
        .attr("y2", h_px/2);
    this.state.d3.r_y
        .attr("x1", (w_px/2)+(r_px/Math.sqrt(2.0)))
        .attr("y1", h_px/2)
        .attr("x2", (w_px/2)+(r_px/Math.sqrt(2.0)))
        .attr("y2", (h_px/2)-(r_px/Math.sqrt(2.0)));
    this.state.d3.r_vec
      .attr("x1", w_px/2)
      .attr("y1", h_px/2)
      .attr("x2", (w_px/2)+(r_px/Math.sqrt(2.0)))
      .attr("y2", (h_px/2)-(r_px/Math.sqrt(2.0)));
  }

  render() {
    return (
      <div ref={(node)=>{this.svg = node;}} className="d3-circle-right-triangle">
      </div>
    )
  }
};