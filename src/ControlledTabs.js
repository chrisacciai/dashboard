import React, { Component } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import Chart1 from './OpsCharts/Chart1.js';
import Chart2 from './OpsCharts/Chart2.js';
import Chart3 from './OpsCharts/Chart3.js';
import Chart4 from './OpsCharts/Chart4.js';
import Chart5 from './OpsCharts/Chart5.js';
import Chart6 from './OpsCharts/Chart6.js';
import PMOChart from './PMOCharts/PMOChart.js';
import BD_Chart1 from './BDCharts/BD_Chart1.js';
import BD_Chart2 from './BDCharts/BD_Chart2.js';
import BD_Chart3 from './BDCharts/BD_Chart3.js';
import BD_Chart4 from './BDCharts/BD_Chart4.js';
import HR_Chart1 from './HRCharts/HR_Chart1.js';
import HR_Chart2 from './HRCharts/HR_Chart2.js';
import S_Chart from './SafetyCharts/S_Chart.js';
import RD_Chart1 from './R&DCharts/RD_Chart1.js';
import RD_Chart2 from './R&DCharts/RD_Chart2.js';
import F_Chart1 from './FinanceCharts/F_Chart1.js';
import F_Chart2 from './FinanceCharts/F_Chart2.js';
import F_Chart3 from './FinanceCharts/F_Chart3.js';
import F_Chart4 from './FinanceCharts/F_Chart4.js';
import F_Chart5 from './FinanceCharts/F_Chart5.js';
import F_Chart6 from './FinanceCharts/F_Chart6.js';
import F_Chart7 from './FinanceCharts/F_Chart7.js';
import Example from './MasterView.js';

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
                  <BD_Chart1/>
                  <BD_Chart3/>
                </div>
                <div class = "column">
                  <BD_Chart2/>
                  <BD_Chart4/>
                </div>
              </div>
          </Tab>
          <Tab eventKey={3} title="Finance">
              <div class = "row">
                <div class = "column">
                  <F_Chart1/>
                  <F_Chart3/>
                  <F_Chart5/>
                  <F_Chart7/>
                </div>
                <div class = "column">
                  <F_Chart2/>
                  <F_Chart4/>
                  <F_Chart6/>
                </div>
              </div>          </Tab>
          <Tab eventKey={4} title="Research &amp; Development">
              <div class = "row">
                <div class = "column">
                  <RD_Chart1/>
                </div>
                <div class = "column">
                  <RD_Chart2/>
                </div>
              </div>
          </Tab>
          <Tab eventKey={5} title="Safety">
              <div class = "row">
                <div class = "column">
                  <S_Chart/>
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
                  <HR_Chart1/>
                </div>
                <div class = "column">
                  <HR_Chart2/>
                </div>
              </div>
          </Tab>
          <Tab eventKey={8} title="Master PDF View">
            <Example/>
          </Tab>
        </Tabs>
      );
    }
}