import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap-tabs';
import {BarChart, Radar, Brush, ReferenceLine, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Chart1 from './Chart1.js';
import Chart2 from './Chart2.js';

export default class ControlledTabs extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        key: 1
      };
    }
  
    handleSelect(key) {
      alert(`selected ${key}`);
      this.setState({ key });
    }
  
    render() {
      return (
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example">
          
          <Tab eventKey={1} title="Tab 1">
          <div class = "row">
          <div class = "column">
            <br/>
            <Chart1/>

            <RadialBarChart width={500} height={500} cx={200} cy={250} innerRadius={20} outerRadius={140} barSize={10} data={data2}>
            <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='uv'/>
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            </RadialBarChart>

            <AreaChart width={600} height={400} data={data4} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
            </AreaChart>
          </div>
          <div class = "column">
            <br/>
            <Chart2/>

            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data3}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis/>
            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
            </RadarChart>

            <BarChart width={600} height={300} data={data5} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
            <ReferenceLine y={0} stroke='#000'/>
            <Brush dataKey='name' height={30} stroke="#8884d8"/>
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
          </Tab>
          <Tab eventKey={2} title="Tab 2">
            Tab 2 content
          </Tab>
        </Tabs>
      );
    }
}