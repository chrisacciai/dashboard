import React, { Component } from 'react';
import {ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import {Table, FormControl, ButtonGroup, Button, Panel} from 'react-bootstrap';
import firebase from '../Firebase.js';

const toDollars = (integer) => {
  return "$" + integer.toLocaleString('en');
}

export default class F_Chart3 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          lineOneMonth: null,
          lineOneData1: null,
          lineOneData2: null,
          lineOneData3: null,
          lineTwoMonth: null,
          lineTwoData1: null,
          lineTwoData2: null,
          lineTwoData3: null,
          lineThreeMonth: null,
          lineThreeData1: null,
          lineThreeData2: null,
          lineThreeData3: null,
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
        const dataRef = firebase.database().ref('FChartThreeData');
        const monthDataPair = {
          month1: this.state.lineOneMonth,
          lineOneValue1: parseInt(this.state.lineOneData1),
          lineOneValue2: parseInt(this.state.lineOneData2),
          lineOneValue3: parseInt(this.state.lineOneData3),
          month2: this.state.lineTwoMonth,
          lineTwoValue1: parseInt(this.state.lineTwoData1),
          lineTwoValue2: parseInt(this.state.lineTwoData2),
          lineTwoValue3: parseInt(this.state.lineTwoData3),
          month3: this.state.lineThreeMonth,
          lineThreeValue1: parseInt(this.state.lineThreeData1),
          lineThreeValue2: parseInt(this.state.lineThreeData2),
          lineThreeValue3: parseInt(this.state.lineThreeData3),

        }
        dataRef.set(monthDataPair);
      }

      componentDidMount() {
        const dataRef = firebase.database().ref('FChartThreeData');
        dataRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState = [];
          newState.push({
            month: items.month1,
            pv: items.lineOneValue1,
            uv: items.lineOneValue2,
            rv: items.lineOneValue3,
          });
          newState.push({
            month: items.month2,
            pv: items.lineTwoValue1,
            uv: items.lineTwoValue2,
            rv: items.lineTwoValue3,
          });
          newState.push({
            month: items.month3,
            pv: items.lineThreeValue1,
            uv: items.lineThreeValue2,
            rv: items.lineThreeValue3,
          });

          this.setState({
            items: newState,
            lineOneMonth: items.month1,
            lineOneData1: items.lineOneValue1,
            lineOneData2: items.lineOneValue2,
            lineOneData3: items.lineOneValue3,
            lineTwoMonth: items.month2,
            lineTwoData1: items.lineTwoValue1,
            lineTwoData2: items.lineTwoValue2,
            lineTwoData3: items.lineTwoValue3,
            lineThreeMonth: items.month3,
            lineThreeData1: items.lineThreeValue1,
            lineThreeData2: items.lineThreeValue2,
            lineThreeData3: items.lineThreeValue3,
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
                  <Button type="submit" bsStyle="primary" form="form16">Submit Data</Button> 
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
                <YAxis tickFormatter={toDollars}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Bar dataKey="pv" fill="#8884d8">
                  <LabelList dataKey='pv' position='top' formatter={toDollars}/>
                </Bar>
                <Bar dataKey="uv" fill="#82ca9d">
                  <LabelList dataKey='uv' position='top' formatter={toDollars}/>
                </Bar>
                <Bar dataKey="rv" fill="#9467bd">
                  <LabelList dataKey='rv' position='top' formatter={toDollars}/>
                </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
            <Panel bsStyle="info" id="note">
              <Panel.Heading >
                <Panel.Title bsClass="panel-title" toggle>
                  Toggle Note
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  <FormControl type="text" name="noteText" onChange={this.handleChange} value={this.state.noteText} />
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table5">
                <form id="form16" onSubmit={this.handleSubmit}>
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Data 1</th>
                    <th>Data 2</th>
                    <th>Data 3</th>
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
                        <td>
                              <FormControl type="text"name="lineOneData3" onChange={this.handleChange} value={this.state.lineOneData3} />
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
                        <td>
                              <FormControl type="text" name="lineTwoData3" onChange={this.handleChange} value={this.state.lineTwoData3} />
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
                        <td>
                              <FormControl type="text" name="lineThreeData3" onChange={this.handleChange} value={this.state.lineThreeData3} />
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