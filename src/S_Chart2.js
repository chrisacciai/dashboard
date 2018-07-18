import React, { Component } from 'react';
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import firebase from './firebase.js';

const COLORS = ['#00C49F','#0088FE'];

export default class S_Chart2 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          lineOneMonth: null,
          lineOneData: null,
          lineTwoMonth: null,
          lineTwoData: null,
          items: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }	
      
      hide() {
        this.setState({
          shown: false
        });
      }
      show() {
        this.setState({
          shown: true
        })
      }

      handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
      }

      handleSubmit(e) {
        e.preventDefault();
        const dataRef = firebase.database().ref('SChartTwoData');
        const monthDataPair = {
          month1: this.state.lineOneMonth,
          value1: parseInt(this.state.lineOneData),
          month2: this.state.lineTwoMonth,
          value2: parseInt(this.state.lineTwoData),
        }
        dataRef.set(monthDataPair);
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
            lineOneMonth: items.month1,
            lineOneData: items.value1,
            lineTwoMonth: items.month2,
            lineTwoData: items.value2,
          });
        });
      }

      render() {
        
        var shown = {
          display: this.state.shown ? "block" : "none"
        };
        
        var hidden = {
          display: this.state.shown ? "none" : "block"
        }

        return (
          <div>
            <br/>
            <div>
              <p class="alignleft">Metric</p>
              <p class="alignright">
                <ButtonGroup bsSize="xs">
                  <Button onClick={this.show.bind(this)}>Chart View</Button>
                  <Button onClick={this.hide.bind(this)}>Edit Data</Button>
                  <Button type="submit" bsStyle="primary" form="form10">Submit Data</Button> 
                </ButtonGroup>
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="container">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={this.state.items} outerRadius={100} fill="#8884d8" label>
                  </Pie>
                  <Legend align="right" layout="vertical" verticalAlign="middle"/>
                </PieChart>
              </ResponsiveContainer>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table4">
                <form id="form10" onSubmit={this.handleSubmit}>
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>Number</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineOneMonth" onChange={this.handleChange} value={this.state.lineOneMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text"name="lineOneData" onChange={this.handleChange} value={this.state.lineOneData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineTwoMonth" onChange={this.handleChange} value={this.state.lineTwoMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineTwoData" onChange={this.handleChange} value={this.state.lineTwoData} />
                            </label>
                        </td>
                    </tr>
                  </tbody>
                </Table>
                </form>
                </div>
              </p>
          </div>
        );
    }
}