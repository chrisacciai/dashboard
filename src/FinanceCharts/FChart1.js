import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList, Legend, Tooltip} from 'recharts';
import {Table, FormControl, ButtonGroup, Button, Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';

const toDollars = (integer) => {
  return "$" + (integer/1000000).toFixed(2) + "M";
}
const toMil = (integer) => {
  return "$" + integer.toString()[0] + " M";
}

export default class F_Chart1 extends Component {
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
          lineFiveMonth: null,
          lineFiveData1: null,
          lineFiveData2: null,
          lineSixMonth: null,
          lineSixData1: null,
          lineSixData2: null,
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
        const dataRef = firebase.database().ref('FChartOneData');
        const monthDataPair = {
          month1: this.state.lineOneMonth,
          lineOneValue1: parseInt(this.state.lineOneData1),
          lineOneValue2: parseInt(this.state.lineOneData2),
          month2: this.state.lineTwoMonth,
          lineTwoValue1: parseInt(this.state.lineTwoData1),
          lineTwoValue2: parseInt(this.state.lineTwoData2),
          month3: this.state.lineThreeMonth,
          lineThreeValue1: parseInt(this.state.lineThreeData1),
          lineThreeValue2: parseInt(this.state.lineThreeData2),
          month4: this.state.lineFourMonth,
          lineFourValue1: parseInt(this.state.lineFourData1),
          lineFourValue2: parseInt(this.state.lineFourData2),
          month5: this.state.lineFiveMonth,
          lineFiveValue1: parseInt(this.state.lineFiveData1),
          lineFiveValue2: parseInt(this.state.lineFiveData2),
          month6: this.state.lineSixMonth,
          lineSixValue1: parseInt(this.state.lineSixData1),
          lineSixValue2: parseInt(this.state.lineSixData2),
          noteText: this.state.noteText,
        }
        dataRef.set(monthDataPair);
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
            lineFiveMonth: items.month5,
            lineFiveData1: items.lineFiveValue1,
            lineFiveData2: items.lineFiveValue2,
            lineSixMonth: items.month6,
            lineSixData1: items.lineSixValue1,
            lineSixData2: items.lineSixValue2,
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
                  <Button onClick={this.show.bind(this)} type="submit" bsStyle="primary" form="form14">Submit Data</Button> 
                </ButtonGroup>
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={this.state.items}
                margin={{top: 0, right: 50, left: 15, bottom: 5}}>
                <XAxis dataKey='month' padding={{left: 25}}/>
                <YAxis tickFormatter={toMil}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="pv" stroke="#00C49F" activeDot={{r: 8}}>
                  <LabelList dataKey='pv' position='bottom' formatter={toDollars} />
                </Line>
                <Line type="monotone" dataKey="uv" stroke="#0088FE" activeDot={{r: 8}}>
                  <LabelList dataKey='uv' position='bottom' formatter={toDollars} />
                </Line>
                <Legend align="center" layout="horizontal" verticalAlign="bottom" iconSize='11'/>
                <Tooltip/>
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div>
            <Panel bsStyle="primary" id="note">
                <span>{this.state.noteText}</span>
            </Panel>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table">
                <form id="form14" onSubmit={this.handleSubmit}>
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
                              <FormControl type="text" name="lineOneData1" onChange={this.handleChange} value={this.state.lineOneData1} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineOneData2" onChange={this.handleChange} value={this.state.lineOneData2} />
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
                    <tr>
                        <td>
                              <FormControl type="text" name="lineFiveMonth" onChange={this.handleChange} value={this.state.lineFiveMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineFiveData1" onChange={this.handleChange} value={this.state.lineFiveData1} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineFiveData2" onChange={this.handleChange} value={this.state.lineFiveData2} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineSixMonth" onChange={this.handleChange} value={this.state.lineSixMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineSixData1" onChange={this.handleChange} value={this.state.lineSixData1} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineSixData2" onChange={this.handleChange} value={this.state.lineSixData2} />
                        </td>
                    </tr>
                  </tbody>
                </Table>
                </form>
                </div>
                <div id="editNote">
                  <FormControl type="text" name="noteText" onChange={this.handleChange} value={this.state.noteText}/>
                </div>
              </p>
          </div>
        );
    }
}