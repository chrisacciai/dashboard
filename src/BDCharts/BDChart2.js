import React, { Component } from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList, Legend} from 'recharts';
import {Table, FormControl, ButtonGroup, Button, Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';

const toPercent = (decimal, fixed = 0) => {
  return `${(decimal * 100).toFixed(fixed)}%`;
}

export default class BD_Chart2 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          lineOneMonth: null,
          lineOneData1: null,
          lineOneData2: null,
          lineTwoMonth: null,
          lineTwoData1: null,
          lineTwoData2: null,
          lineThreeMonth: null,
          lineThreeData1: null,
          lineThreeData2: null,
          lineFourMonth: null,
          lineFourData1: null,
          lineFourData2: null,
          items: null,
          noteText: null,
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
        const dataRef = firebase.database().ref('BDChartTwoData');
        const monthDataPair = {
          month1: this.state.lineOneMonth,
          lineOneValue1: parseFloat(this.state.lineOneData1),
          lineOneValue2: parseFloat(this.state.lineOneData2),
          month2: this.state.lineTwoMonth,
          lineTwoValue1: parseFloat(this.state.lineTwoData1),
          lineTwoValue2: parseFloat(this.state.lineTwoData2),
          month3: this.state.lineThreeMonth,
          lineThreeValue1: parseFloat(this.state.lineThreeData1),
          lineThreeValue2: parseFloat(this.state.lineThreeData2),
          month4: this.state.lineFourMonth,
          lineFourValue1: parseFloat(this.state.lineFourData1),
          lineFourValue2: parseFloat(this.state.lineFourData2),
          noteText: this.state.noteText,
        }
        dataRef.set(monthDataPair);
      }

      componentDidMount() {
        const dataRef = firebase.database().ref('BDChartTwoData');
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

          this.setState({
            items: newState,
            lineOneMonth: items.month1,
            lineOneData1: items.lineOneValue1,
            lineOneData2: items.lineOneValue2,
            lineTwoMonth: items.month2,
            lineTwoData1: items.lineTwoValue1,
            lineTwoData2: items.lineTwoValue2,
            lineThreeMonth: items.month3,
            lineThreeData1: items.lineThreeValue1,
            lineThreeData2: items.lineThreeValue2,
            lineFourMonth: items.month4,
            lineFourData1: items.lineFourValue1,
            lineFourData2: items.lineFourValue2,
            noteText: items.noteText,
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
              <p class="alignleft">Example Metric</p>
              <p class="alignright">
                <ButtonGroup bsSize="xs">
                  <Button onClick={this.show.bind(this)}>Chart View</Button>
                  <Button onClick={this.hide.bind(this)}>Edit Data</Button>
                  <Button onClick={this.show.bind(this)} type="submit" bsStyle="primary" form="form8">Submit Data</Button> 
                </ButtonGroup>
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="container">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data ={this.state.items}
                margin={{top: 0, right: 50, left: 15, bottom: 5}}>
                <XAxis dataKey='month'/>
                <YAxis tickFormatter={toPercent}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar dataKey="pv" fill="#00C49F">
                  <LabelList dataKey='pv' position='top' formatter={toPercent} />
                </Bar>
                <Bar dataKey="uv" fill="#0088FE">
                  <LabelList dataKey='uv' position='top' formatter={toPercent} />
                </Bar>
                <Legend margin={{top: 10}} align="center" layout="horizontal" verticalAlign="bottom" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
            <Panel bsStyle="primary" id="note">
                <Panel.Body>
                  {this.state.noteText}
                </Panel.Body>
            </Panel>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table5">
                <form id="form8" onSubmit={this.handleSubmit}>
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Data 1</th>
                    <th>Data 2</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineOneMonth" onChange={this.handleChange} value={this.state.lineOneMonth} />
                        </td>
                        <td>
                              <FormControl type="text"name="lineOneData1" onChange={this.handleChange} value={this.state.lineOneData1} />
                        </td>
                        <td>
                              <FormControl type="text"name="lineOneData2" onChange={this.handleChange} value={this.state.lineOneData2} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineTwoMonth" onChange={this.handleChange} value={this.state.lineTwoMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineTwoData1" onChange={this.handleChange} value={this.state.lineTwoData1} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineTwoData2" onChange={this.handleChange} value={this.state.lineTwoData2} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineThreeMonth" onChange={this.handleChange} value={this.state.lineThreeMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineThreeData1" onChange={this.handleChange} value={this.state.lineThreeData1} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineThreeData2" onChange={this.handleChange} value={this.state.lineThreeData2} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineFourMonth" onChange={this.handleChange} value={this.state.lineFourMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineFourData1" onChange={this.handleChange} value={this.state.lineFourData1} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineFourData2" onChange={this.handleChange} value={this.state.lineFourData2} />
                        </td>
                    </tr>
                  </tbody>
                </Table>
                </form>
                </div>
                <div>
                  <Panel bsStyle="primary" id="note">
                      <Panel.Body>
                        <FormControl type="text" name="noteText" onChange={this.handleChange} value={this.state.noteText} />
                      </Panel.Body>
                  </Panel>
                </div>
              </p>
          </div>
        );
    }
}