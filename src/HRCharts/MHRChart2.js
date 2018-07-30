import React, { Component } from 'react';
import {PieChart, Pie, Cell, Legend} from 'recharts';
import {Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';

const COLORS = ['#00C49F','#0088FE'];

const legendStyle = {
    left: 30,
    iconSize: 11,
}

export default class MHRChart2 extends Component {
    constructor() {
        super();
        this.state = {
          items: null,
          noteText: "",
        };
      }	

      componentDidMount() {
        const dataRef = firebase.database().ref('SChartTwoData');
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
            noteText: items.noteText,
          });
        });
      }

      showNote() {
        if (this.state.noteText != "" && this.state.noteText != null)
          return <Panel bsStyle="primary" id="Mnote"><span>{this.state.noteText}</span></Panel>
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
              <PieChart data={this.state.items} width={375} height={200}
                margin={{top: 10, right: 30, left: -18, bottom: 5}}>
                  <Pie data={this.state.items} outerRadius={55} cx={210} cy={87} isAnimationActive={false} label>
                    if
                    {
          	          this.mapToColor()
                    }
                  </Pie>
                <Legend wrapperStyle={legendStyle}/>
              </PieChart>
            </div>
            {this.showNote()}
          </div>
        );
    }
}