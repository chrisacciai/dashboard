import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import Chart1 from './OpsCharts/Chart1.js';
import Chart2 from './OpsCharts/Chart2.js';
import Chart3 from './OpsCharts/Chart3.js';
import Chart4 from './OpsCharts/Chart4.js';
import Chart5 from './OpsCharts/Chart5.js';
import Chart6 from './OpsCharts/Chart6.js';
import PMOChart from './PMOCharts/PMOChart.js';
import BDChart1 from './BDCharts/BDChart1.js';
import BDChart2 from './BDCharts/BDChart2.js';
import BDChart3 from './BDCharts/BDChart3.js';
import BDChart4 from './BDCharts/BDChart4.js';
import HRChart1 from './HRCharts/HRChart1.js';
import HRChart2 from './HRCharts/HRChart2.js';
import SChart from './SafetyCharts/SChart.js';
import RDChart1 from './R&DCharts/RDChart1.js';
import RDChart2 from './R&DCharts/RDChart2.js';
import FChart1 from './FinanceCharts/FChart1.js';
import FChart2 from './FinanceCharts/FChart2.js';
import FChart3 from './FinanceCharts/FChart3.js';
import FChart4 from './FinanceCharts/FChart4.js';
import FChart5 from './FinanceCharts/FChart5.js';
import FChart6 from './FinanceCharts/FChart6.js';
import FChart7 from './FinanceCharts/FChart7.js';
import Export from './Export.js';

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
        <Tabs className="tabColor"
          activeKey={this.state.key}
          onSelect={this.handleSelect}
          id="controlled-tab-example">

          <Tab eventKey={1} title="Operations">
            <div class = "row">
              <div class = "column">
                <Chart1/>
                <Chart3/>
                <Chart5/>
              </div>
              <div class = "column">
                <Chart2/>
                <Chart4/>
                <Chart6/>
              </div>
            </div>
          </Tab>
          <Tab eventKey={2} title="Business Development">
              <div class = "row">
                <div class = "column">
                  <BDChart1/>
                  <BDChart3/>
                </div>
                <div class = "column">
                  <BDChart2/>
                  <BDChart4/>
                </div>
              </div>
          </Tab>
          <Tab eventKey={3} title="Finance">
              <div class = "row">
                <div class = "column">
                  <FChart1/>
                  <FChart3/>
                  <FChart5/>
                  <FChart7/>
                </div>
                <div class = "column">
                  <FChart2/>
                  <FChart4/>
                  <FChart6/>
                </div>
              </div>          </Tab>
          <Tab eventKey={4} title="Research &amp; Development">
              <div class = "row">
                <div class = "column">
                  <RDChart1/>
                </div>
                <div class = "column">
                  <RDChart2/>
                </div>
              </div>
          </Tab>
          <Tab eventKey={5} title="Safety">
              <div class = "row">
                <div class = "column">
                  <SChart/>
                </div>
                <div class = "column">
                </div>
              </div>
          </Tab>
          <Tab eventKey={6} title="PMO">
              <div class = "row">
                <div class = "column">
                  <PMOChart/>
                </div>
                <div class = "column">
                </div>
              </div>
          </Tab>
          <Tab eventKey={7} title="Human Resources">
              <div class = "row">
                <div class = "column">
                  <HRChart1/>
                </div>
                <div class = "column">
                  <HRChart2/>
                </div>
              </div>
          </Tab>
          <Tab eventKey={8} title="Master PDF View">
            <Export/>
          </Tab>
        </Tabs>
      );
    }
}