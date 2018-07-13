import React, { Component } from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, LabelList, ReferenceLine} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class Chart4 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          chartData: [{month: 'Aug-17', pv: 832},{month: 'Sep-17', pv: 392},{month: 'Oct-17', pv: 360},{month: 'Nov-17', pv: 292},{month: 'Dec-17', pv: 138},{month: 'Jan-18', pv: 843},{month: 'Feb-18', pv: 921},{month: 'Mar-18', pv: 482},{month: 'Apr-18', pv: 842},{month: 'May-18', pv: 912}],
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

      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

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
              <p class="alignleft">Healthcare Productivity: Aliquots/FTE</p>
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
                <LineChart data ={this.state.chartData}
                margin={{top: 0, right: 30, left: 15, bottom: 5}}>
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
                    <th>Aliquots/FTE</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv" onChange={this.handleChange} />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                              <input type="text" name="month" onChange={this.handleChange} />
                            </label>
                        </td>
                        <td>
                            <label>
                              <input type="text" name="pv" onChange={this.handleChange} />
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