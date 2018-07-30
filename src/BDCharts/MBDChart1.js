import React, { Component } from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import {Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';
  
const toPercent = (decimal, fixed = 0) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  }

export default class MBDChart1 extends Component {
    constructor() {
        super();
        this.state = {
          items: null,
          noteText: "",
        };
      }	

      componentDidMount() {
        const dataRef = firebase.database().ref('BDChartOneData');
        dataRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          newState.push({
            month: items.month1,
            pv: items.value1,
          });
          newState.push({
            month: items.month2,
            pv: items.value2,
          });
          newState.push({
            month: items.month3,
            pv: items.value3,
          });

          this.setState({
            items: newState,
            noteText: items.noteText,
          });
        });
      }
      
      showNote() {
        if (this.state.noteText != "" && this.state.noteText != null)
          return <Panel bsStyle="primary" id="Mnote"><span>{this.state.noteText}</span></Panel>
        }

      render() {
        return (
          <div>
            <br/>
            <div>
              <p class="aligncenter">Example Metric</p>
            </div>
            <div>
              <BarChart data={this.state.items} width={375} height={200}
                margin={{top: 10, right: 30, left: -18, bottom: 5}}>
                <XAxis dataKey='month' tick={{fontSize: 11}} height={20} interval={0}/>
                <YAxis tick={{fontSize: 11}} tickFormatter={toPercent}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar dataKey="pv" fill="#00C49F">
                  <LabelList dataKey='pv' position='top' formatter={toPercent} fontSize='11'/>
                </Bar>
              </BarChart>
            </div>
            {this.showNote()}
          </div>
        );
    }
}