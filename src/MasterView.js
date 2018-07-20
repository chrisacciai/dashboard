import React, { Component } from 'react';
import M_Chart1 from './OpsChart/M_Chart1.js';
import M_Chart2 from './OpsChart/M_Chart2.js';
import M_Chart3 from './OpsChart/M_Chart3.js';

export default class MasterView extends Component {
      render() {
        return (
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
        );
    }
}