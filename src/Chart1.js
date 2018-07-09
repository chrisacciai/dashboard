import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

const data = [
    {month: 'Jan-18', pv: 74},
    {month: 'Feb-18', pv: 87},
    {month: 'Mar-18', pv: 92},
    {month: 'Apr-18', pv: 112},
    {month: 'May-18', pv: 160},
    {month: 'MTD 6/18/18', pv: 136},
  ];

export default class Chart1 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
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
        this.setState({value: event.target.value});
      }
    
      handleUpdate(event) {
        alert('New Month: ' + this.state.value);
        event.preventDefault();
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
                  <Button onClick={this.hide.bind(this)}>Edit Data</Button>
                  <Button onClick={this.show.bind(this)}>Update</Button>
                </ButtonGroup> 
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="container">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}
                margin={{top: 0, right: 30, left: 15, bottom: 5}}>
                <XAxis dataKey="month"/>
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3"/>
                <ReferenceLine y={96} stroke="blue" strokeDasharray="3 3" />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                </LineChart>
              </ResponsiveContainer>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table">
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
                          <form onSubmit={this.handleUpdate}>
                            <label>
                              <input type="text" value={this.state.value} onChange={this.handleChange} />
                            </label>
                              <input type="submit" value="Submit" />
                          </form>
                        </td>
                        <td>74</td>
                    </tr>
                    <tr>
                        <td>Feb-18</td>
                        <td>87</td>
                    </tr>
                    <tr>
                        <td>Mar-18</td>
                        <td>92</td>
                    </tr>
                    <tr>
                        <td>Apr-18</td>
                        <td>112</td>
                    </tr>
                    <tr>
                        <td>May-18</td>
                        <td>160</td>
                    </tr>
                    <tr>
                        <td>MTD 6/25/18</td>
                        <td>139</td>
                    </tr>
                  </tbody>
                </Table>
                </div>
              </p>
          </div>
        );
    }
}