import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import {Table, FormControl, ButtonGroup, Button} from 'react-bootstrap';
import firebase from './firebase.js'

export default class Chart1 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          lineOneMonth: null,
          lineOneData: null,
          lineTwoMonth: null,
          lineTwoData: null,
          lineThreeMonth: null,
          lineThreeData: null,
          lineFourMonth: null,
          lineFourData: null,
          lineFiveMonth: null,
          lineFiveData: null,
          lineSixMonth: null,
          lineSixData: null,
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
        const dataRef = firebase.database().ref('chartOneData');
        const monthDataPair = {
          month1: this.state.lineOneMonth,
          value1: parseInt(this.state.lineOneData),
          month2: this.state.lineTwoMonth,
          value2: parseInt(this.state.lineTwoData),
          month3: this.state.lineThreeMonth,
          value3: parseInt(this.state.lineThreeData),
          month4: this.state.lineFourMonth,
          value4: parseInt(this.state.lineFourData),
          month5: this.state.lineFiveMonth,
          value5: parseInt(this.state.lineFiveData),
          month6: this.state.lineSixMonth,
          value6: parseInt(this.state.lineSixData),
        }
        dataRef.set(monthDataPair);
      }

      componentDidMount() {
        const dataRef = firebase.database().ref('chartOneData');
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
            lineOneMonth: items.month1,
            lineOneData: items.value1,
            lineTwoMonth: items.month2,
            lineTwoData: items.value2,
            lineThreeMonth: items.month3,
            lineThreeData: items.value3,
            lineFourMonth: items.month4,
            lineFourData: items.value4,
            lineFiveMonth: items.month5,
            lineFiveData: items.value5,
            lineSixMonth: items.month6,
            lineSixData: items.value6,
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
                <LineChart data={this.state.items}
                margin={{top: 0, right: 35, left: 10, bottom: 5}}>
                <XAxis dataKey='month'/>
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
                              <FormControl type="text" name="lineOneMonth" onChange={this.handleChange} value={this.state.lineOneMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineOneData" onChange={this.handleChange} value={this.state.lineOneData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineTwoMonth" onChange={this.handleChange} value={this.state.lineTwoMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineTwoData" onChange={this.handleChange} value={this.state.lineTwoData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineThreeMonth" onChange={this.handleChange} value={this.state.lineThreeMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineThreeData" onChange={this.handleChange} value={this.state.lineThreeData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineFourMonth" onChange={this.handleChange} value={this.state.lineFourMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineFourData" onChange={this.handleChange} value={this.state.lineFourData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineFiveMonth" onChange={this.handleChange} value={this.state.lineFiveMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineFiveData" onChange={this.handleChange} value={this.state.lineFiveData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineSixMonth" onChange={this.handleChange} value={this.state.lineSixMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineSixData" onChange={this.handleChange} value={this.state.lineSixData} />
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