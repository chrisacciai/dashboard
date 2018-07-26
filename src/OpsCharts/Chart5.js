import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import {Table, FormControl, ButtonGroup, Button, Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';

export default class Chart5 extends Component {
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
          lineSevenMonth: null,
          lineSevenData: null,
          lineEightMonth: null,
          lineEightData: null,
          lineNineMonth: null,
          lineNineData: null,
          lineTenMonth: null,
          lineTenData: null,
          lineElevenMonth: null,
          lineElevenData: null,
          lineTwelveMonth: null,
          lineTwelveData: null,
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
        const dataRef = firebase.database().ref('chartFiveData');
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
          month7: this.state.lineSevenMonth,
          value7: parseInt(this.state.lineSevenData),
          month8: this.state.lineEightMonth,
          value8: parseInt(this.state.lineEightData),
          month9: this.state.lineNineMonth,
          value9: parseInt(this.state.lineNineData),
          month10: this.state.lineTenMonth,
          value10: parseInt(this.state.lineTenData),
          month11: this.state.lineElevenMonth,
          value11: parseInt(this.state.lineElevenData),
          month12: this.state.lineTwelveMonth,
          value12: parseInt(this.state.lineTwelveData),
          noteText: this.state.noteText,
          
        }
        dataRef.set(monthDataPair);
      }

      componentDidMount() {
        const dataRef = firebase.database().ref('chartFiveData');
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
          newState.push({
            month: items.month7,
            pv: items.value7,
          });
          newState.push({
            month: items.month8,
            pv: items.value8,
          });
          newState.push({
            month: items.month9,
            pv: items.value9,
          });
          newState.push({
            month: items.month10,
            pv: items.value10,
          });
          newState.push({
            month: items.month11,
            pv: items.value11,
          });
          newState.push({
            month: items.month12,
            pv: items.value12,
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
            lineSevenMonth: items.month7,
            lineSevenData: items.value7,
            lineEightMonth: items.month8,
            lineEightData: items.value8,
            lineNineMonth: items.month9,
            lineNineData: items.value9,
            lineTenMonth: items.month10,
            lineTenData: items.value10,
            lineElevenMonth: items.month11,
            lineElevenData: items.value11,
            lineTwelveMonth: items.month12,
            lineTwelveData: items.value12,
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
                  <Button onClick={this.show.bind(this)} type="submit" bsStyle="primary" form="form5">Submit Data</Button> 
                </ButtonGroup>
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="chartFiveContainer">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data ={this.state.items}
                margin={{top: 0, right: 50, left: 15, bottom: 26}}>
                <XAxis dataKey='month' tick={{angle: -45}} tickMargin='12' interval={0} padding={{left: 25}}/>
                <YAxis />
                <CartesianGrid strokeDasharray="3 3"/>
                <Line type="monotone" dataKey="pv" stroke="#00C49F" activeDot={{r: 8}}>
                  <LabelList dataKey='pv' position='bottom'/>
                </Line>
                </LineChart>
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
              <div id="table3">
                <form id="form5" onSubmit={this.handleSubmit}>
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Data</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineOneMonth" onChange={this.handleChange} value={this.state.lineOneMonth} />
                        </td>
                        <td>
                              <FormControl type="text"name="lineOneData" onChange={this.handleChange} value={this.state.lineOneData} />
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
                    <tr>
                        <td>
                              <FormControl type="text" name="lineSevenMonth" onChange={this.handleChange} value={this.state.lineSevenMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineSevenData" onChange={this.handleChange} value={this.state.lineSevenData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineEightMonth" onChange={this.handleChange} value={this.state.lineEightMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineEightData" onChange={this.handleChange} value={this.state.lineEightData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineNineMonth" onChange={this.handleChange} value={this.state.lineNineMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineNineData" onChange={this.handleChange} value={this.state.lineNineData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineTenMonth" onChange={this.handleChange} value={this.state.lineTenMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineTenData" onChange={this.handleChange} value={this.state.lineTenData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineElevenMonth" onChange={this.handleChange} value={this.state.lineElevenMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineElevenData" onChange={this.handleChange} value={this.state.lineElevenData} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                              <FormControl type="text" name="lineTwelveMonth" onChange={this.handleChange} value={this.state.lineTwelveMonth} />
                        </td>
                        <td>
                              <FormControl type="text" name="lineTwelveData" onChange={this.handleChange} value={this.state.lineTwelveData} />
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