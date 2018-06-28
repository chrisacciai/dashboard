import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
  ];

class Chart1 extends Component {
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
            <p style={ shown }>
            <BarChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
            </p>
            <p style={ hidden }>Edit Data Here...</p>
            <ButtonGroup>
                <Button onClick={this.toggle.bind(this)}>Edit Data</Button>
                <Button>Update</Button>
            </ButtonGroup>
            </div>
        );
    }
}

export default Chart1