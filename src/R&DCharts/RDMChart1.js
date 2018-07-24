import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import firebase from '../Firebase.js';

const COLORS = ['#00C49F','#0088FE'];

const toDollars = (item) => {
  return "$" + item.value.toLocaleString('en');
}

export default class RDMChart1 extends Component {
    constructor() {
        super();
        this.state = {
          items: null
        };
      }	

  componentDidMount() {
    const dataRef = firebase.database().ref('RDChartOneData');
    dataRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      newState.push({
        name: items.month1,
        value: items.value1,
      });
      newState.push({
        name: items.month2,
        value: items.value2,
      });

      this.setState({
        items: newState,
      });
    });
  }
  mapToColor() {
    if (this.state.items != null) {
        return this.state.items.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
    }
  }
  
  render() {
    return (
      <div>
        <br/>
        <div>
          <p class="aligncenter">Example Metric</p>
        </div>
        <div>
            <PieChart>
                  <Pie data={this.state.items} outerRadius={100} fill="#8884d8" isAnimationActive={false} label={toDollars} width={375} height={200}
                    margin={{top: 10, right: 30, left: 0, bottom: 10}}>
                    if
                    {
          	          this.mapToColor()
                    }
                  </Pie>
                  <Legend align="center" layout="horizontal" verticalAlign="bottom" />
            </PieChart>
        </div>
      </div>
    );
}
}