import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
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
      this.setState({ key });
    }
  
    render() {
      return (
        <Tabs
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example">

          <Tab eventKey={1} title="Operations">
          <div class = "row">
          <div class = "column">
            <br/>
            <Chart1/>
          </div>
          <div class = "column">
            <br/>
            <Chart2/>
          </div>
        </div>
          </Tab>
          <Tab eventKey={2} title="Business Development">
            Tab 2 content
          </Tab>
          <Tab eventKey={3} title="Finance">
            Tab 3 content
          </Tab>
        </Tabs>
      );
    }
}