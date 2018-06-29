import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';

const data = [
    {month: 'Jan-18', pv: 74},
    {month: 'Feb-18', pv: 87},
    {month: 'Mar-18', pv: 92},
    {month: 'Apr-18', pv: 112},
    {month: 'May-18', pv: 160},
    {month: 'MTD 6/18/18', pv: 136},
  ];

export default class Chart1 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
        };
      }	
      
      toggle() {
        this.setState({
          shown: !this.state.shown
        });
      }
      render() {
        
        var shown = {
          display: this.state.shown ? "block" : "none"
        };
        
        var hidden = {
          display: this.state.shown ? "none" : "block"
        }

        return (
          <div>
            <br/>
            <div>
              <p class="alignleft">Healthcare Average TAT</p>
              <p class="alignright">
                <ButtonGroup bsSize="xs">
                  <Button onClick={this.toggle.bind(this)}>Edit Data</Button>
                  <Button>Update</Button>
                </ButtonGroup> 
              </p>
            </div>
          <p style={ shown }>
            <LineChart data={data}
            margin={{top: 5, right: 30, left: 15, bottom: 5}}>
            <XAxis dataKey="month"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <ReferenceLine y={96} stroke="blue" strokeDasharray="3 3" />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
            </p>
            <p style={ hidden }>Edit Data Here...</p>
            </div>
        );
    }
}