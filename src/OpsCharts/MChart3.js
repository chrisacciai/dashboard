import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import firebase from '../Firebase.js';

const toPercent = (decimal, fixed = 0) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  }
  
export default class M_Chart3 extends Component {
    constructor() {
        super();
        this.state = {
          items: null
        };
      }	

      componentDidMount() {
        const dataRef = firebase.database().ref('chartThreeData');
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
          newState.push({
            month: items.month4,
            pv: items.value4,
          });
          newState.push({
            month: items.month5,
            pv: items.value5,
          });
          newState.push({
            month: items.month6,
            pv: items.value6,
          });

          this.setState({
            items: newState,
          });
        });
      }

      render() {
        return (
          <div>
            <br/>
            <div>
              <p class="aligncenter">Example Metric</p>
            </div>
            <div>
              <LineChart data={this.state.items} width={375} height={200}
                margin={{top: 10, right: 30, left: 0, bottom: 10}}>
                <XAxis dataKey='month' tick={{fontSize: 11}} interval={0}/>
                <YAxis tickFormatter={toPercent} tick={{fontSize: 11}}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}>
                  <LabelList dataKey='pv' position='bottom' formatter={toPercent} fontSize='11' />
                </Line>
              </LineChart>
            </div>
          </div>
        );
    }
}