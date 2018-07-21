import React, { Component } from 'react';
import M_Chart1 from './OpsCharts/M_Chart1.js';
import M_Chart2 from './OpsCharts/M_Chart2.js';
import M_Chart3 from './OpsCharts/M_Chart3.js';
import ReactToPrint from 'react-to-print';

export default class MasterView extends Component {
      render() {
        return (
            <div>
                <div class = "MasterHeader">
                    <p className = "MasterText">
                        Operations
                    </p>
                </div>
                <div class = "row">
                    <div class = "columnThirds">
                        <M_Chart1/>
                    </div>
                    <div class = "columnThirds">
                        <M_Chart2/>
                    </div>
                    <div class = "columnThirds">
                        <M_Chart3/>
                    </div>
                </div>
            </div>
        );
    }
}

class Example extends React.Component {
    render() {
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <MasterView ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  }