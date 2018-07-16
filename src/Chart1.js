import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import firebase from './firebase.js'

const testData = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class Chart1 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          lineOneMonth: 'Jan-18',
          lineOneData: 74,
          lineTwoMonth: 'Feb-18',
          lineTwoData: 87,
          lineThreeMonth: 'Mar-18',
          lineThreeData: 92,
          lineFourMonth: 'Apr-18',
          lineFourData: 112,
          lineFiveMonth: 'May-18',
          lineFiveData: 160,
          lineSixMonth: 'MTD 6/18/18',
          lineSixData: 136,
          chartData: null
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
        const dataRef = firebase.database().ref('chartOneData');
        const monthDataPair = {
          month1: this.state.lineOneMonth,
          value1: this.state.lineOneData,
          month2: this.state.lineTwoMonth,
          value2: this.state.lineTwoData,
          month3: this.state.lineThreeMonth,
          value3: this.state.lineThreeData,
          month4: this.state.lineFourMonth,
          value4: this.state.lineFourData,
          month5: this.state.lineFiveMonth,
          value5: this.state.lineFiveData,
          month6: this.state.lineSixMonth,
          value6: this.state.lineSixData,
        }
        dataRef.set(monthDataPair);
        this.setState({
          lineOneMonth: this.state.lineOneMonth,
          lineOneData: this.state.lineOneData,
          lineTwoMonth: this.state.lineTwoMonth,
          lineTwoData: this.state.lineTwoData,
          lineThreeMonth: this.state.lineThreeMonth,
          lineThreeData: this.state.lineThreeData,
          lineFourMonth: this.state.lineFourMonth,
          lineFourData: this.state.lineFourData,
          lineFiveMonth: this.state.lineFiveMonth,
          lineFiveData: this.state.lineFiveData,
          lineSixMonth: this.state.lineSixMonth,
          lineSixData: this.state.lineSixData,
        });
      }

      componentDidMount() {
        const dataRef = firebase.database().ref('chartOneData');
        dataRef.on('value', (snapshot) => {
          this.setState({chartData: snapshot.val()});
          console.log(this.state.chartData);
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
              <p class="alignleft">Healthcare Average TAT</p>
              <p class="alignright">
                <ButtonGroup bsSize="xs">
                  <Button onClick={this.show.bind(this)}>Chart View</Button>
                  <Button onClick={this.hide.bind(this)}>Edit Data</Button>
                  <Button type="submit" bsStyle="primary" form="form1">Submit Data</Button> 
                </ButtonGroup>
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={testData}
                margin={{top: 0, right: 30, left: 15, bottom: 5}}>
                <XAxis dataKey='name'/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}>
                  <LabelList dataKey='pv' position='bottom' />
                </Line>
                </LineChart>
              </ResponsiveContainer>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table">
                <form id="form1" onSubmit={this.handleSubmit}>
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Average TAT</th>
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
                              <input type="text" name="lineOneData" onChange={this.handleChange} value={this.state.lineOneData} />
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
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineThreeMonth" onChange={this.handleChange} value={this.state.lineThreeMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineThreeData" onChange={this.handleChange} value={this.state.lineThreeData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineFourMonth" onChange={this.handleChange} value={this.state.lineFourMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineFourData" onChange={this.handleChange} value={this.state.lineFourData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineFiveMonth" onChange={this.handleChange} value={this.state.lineFiveMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineFiveData" onChange={this.handleChange} value={this.state.lineFiveData} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="lineSixMonth" onChange={this.handleChange} value={this.state.lineSixMonth} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="lineSixData" onChange={this.handleChange} value={this.state.lineSixData} />
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