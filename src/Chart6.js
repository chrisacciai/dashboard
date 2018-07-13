import React, { Component } from 'react';
import {ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, LabelList} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

const toPercent = (decimal, fixed = 2) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  }

const toPercentAxis = (decimal, fixed = 1) => {
    return `${(decimal * 100).toFixed(fixed)}%`;
  }

export default class Chart5 extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          chartData: [{month: '14', pv: 29},{month: '15', pv: 93},{month: '16', pv: 93},{month: '17', pv: 23},{month: '18', pv: 84},{month: '19', pv: 38},{month: '20', pv: 84},{month: '21', pv: 32},{month: '22', pv: 93},{month: '23', pv: 38},{month: '24', pv: 19},{month: '25', pv: 74}],
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
              <p class="alignleft">Healthcare Analytical Reporting Errors</p>
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
                <AreaChart data ={this.state.chartData}
                margin={{top: 0, right: 30, left: 15, bottom: 5}}>
                <XAxis dataKey='month'/>
                <YAxis tickFormatter={toPercentAxis}/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8">
                  <LabelList dataKey='pv' position='top' formatter={toPercent} />
                </Area>
                </AreaChart>
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