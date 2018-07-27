import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList, Legend} from 'recharts';
import {Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';


const toDollars = (integer) => {
    return "$" + (integer/1000000).toFixed(2) + "M";
  }
  const toMil = (integer) => {
    return "$" + integer.toString()[0] + " M";
  }

export default class FMChart1 extends Component {
    constructor() {
        super();
        this.state = {
          items: null,
          noteText: "",
        };
      }	
      componentDidMount() {
        const dataRef = firebase.database().ref('FChartOneData');
        dataRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          newState.push({
            month: items.month1,
            pv: items.lineOneValue1,
            uv: items.lineOneValue2,
          });
          newState.push({
            month: items.month2,
            pv: items.lineTwoValue1,
            uv: items.lineTwoValue2,
          });
          newState.push({
            month: items.month3,
            pv: items.lineThreeValue1,
            uv: items.lineThreeValue2,
          });
          newState.push({
            month: items.month4,
            pv: items.lineFourValue1,
            uv: items.lineFourValue2,
          });
          newState.push({
            month: items.month5,
            pv: items.lineFiveValue1,
            uv: items.lineFiveValue2,
          });
          newState.push({
            month: items.month6,
            pv: items.lineSixValue1,
            uv: items.lineSixValue2,
          });

          this.setState({
            items: newState,
            noteText: items.noteText,
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
                margin={{top: 10, right: 30, left: -18, bottom: 5}}>
                <XAxis dataKey='month' tick={{fontSize: 11}} interval={0} height='15' padding={{left: 15}}/>
                <YAxis tick={{fontSize: 11}} tickFormatter={toMil}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="pv" stroke="#00C49F" activeDot={{r: 8}}>
                  <LabelList dataKey='pv' position='bottom' formatter={toDollars} fontSize='11'/>
                </Line>
                <Line type="monotone" dataKey="uv" stroke="#0088FE" activeDot={{r: 8}}>
                  <LabelList dataKey='uv' position='bottom' formatter={toDollars} fontSize='11'/>
                </Line>
                <Legend align="center" layout="horizontal" verticalAlign="bottom" iconSize='11'/>
              </LineChart>
            </div>
            <Panel bsStyle="primary" id="Mnote">
              <span>{this.state.noteText}</span>
            </Panel>
          </div>
        );
    }
}