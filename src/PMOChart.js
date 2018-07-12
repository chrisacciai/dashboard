import React, { Component } from 'react';
import {ResponsiveContainer, PieChart, Pie} from 'recharts';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import {Table} from 'react-bootstrap';

export default class PMOChart extends Component {
    constructor() {
        super();
        this.state = {
          shown: true,
          chartData: [{projectStatus: 'Completed', pv: 7},{projectStatus: 'Active', pv: 12},{projectStatus: 'Approved/Pending Start', pv: 2},{projectStatus: 'Cancelled', pv: 0}],
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
              <p class="alignleft">Project Status</p>
              <p class="alignright">
                <ButtonGroup bsSize="xs">
                  <Button onClick={this.show.bind(this)}>Chart View</Button>
                  <Button onClick={this.hide.bind(this)}>Edit Data</Button>
                  <Button type="submit" bsStyle="primary" form="form1">Refresh</Button> 
                </ButtonGroup>
              </p>
            </div>
            <br/>
            <p style={ shown }>
            <div id="container">
              <PieChart width={800} height={400}>
                <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
                <Pie data={this.state.chartData} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
              </PieChart>
            </div>
            </p>
            <p style={ hidden }>
              <div id="table">
                <form id="form1" onSubmit={this.handleSubmit}>
                <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>Project Status</th>
                    <th>Count</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                        <td>
                            <label>Completed
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
                            <label>Active
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
                            <label>Approved/Pending Start
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
                            <label>Cancelled
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