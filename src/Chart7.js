import React, { Component } from 'react';
import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts';
import {Table, FormControl, ButtonGroup, Button} from 'react-bootstrap';
import firebase from './firebase';

const COLORS = ['#00C49F','#0088FE', '#DCDCDC', '#D50D0D'];

export default class Chart7 extends Component {
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
      const dataRef = firebase.database().ref('ChartSevenData');
      const monthDataPair = {
        month1: this.state.lineOneMonth,
        value1: parseInt(this.state.lineOneData, radix),
        month2: this.state.lineTwoMonth,
        value2: parseInt(this.state.lineTwoData, radix),
        month3: this.state.lineThreeMonth,
        value3: parseInt(this.state.lineThreeData, radix),
        month4: this.state.lineFourMonth,
        value4: parseInt(this.state.lineFourData, radix),
      }
      dataRef.set(monthDataPair);
    }

    mapToColor() {
      if (this.state.items != null) {
          return this.state.items.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
      }
    }

    componentDidMount() {
      const dataRef = firebase.database().ref('ChartSevenData');
      dataRef.on('value', (snapshot) => {
        let items = snapshot.val();
        let newState = [];
        newState.push({
          name: items.month1,
          value: items.value1,
        });
        newState.push({
          name: items.month2,
          value: items.value2,
        });
        newState.push({
          name: items.month3,
          value: items.value3,
        });
        newState.push({
          name: items.month4,
          value: items.value4,
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
            <p class="alignleft">Metric</p>
            <p class="alignright">
              <ButtonGroup bsSize="xs">
                <Button onClick={this.show.bind(this)}>Chart View</Button>
                <Button onClick={this.hide.bind(this)}>Edit Data</Button>
                <Button type="submit" bsStyle="primary" form="form21">Submit Data</Button> 
              </ButtonGroup>
            </p>
          </div>
          <br/>
          <p style={ shown }>
          <div id="container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={this.state.items} outerRadius={100} fill="#8884d8" isAnimationActive={false} label={true}>
                  if
                  {
                    this.mapToColor()
                  }
                </Pie>
                <Legend align="center" layout="horizontal" verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>
          </p>
          <p style={ hidden }>
            <div id="table4">
              <form id="form21" onSubmit={this.handleSubmit}>
              <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Number</th>
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
                            <FormControl type="text"name="lineThreeData" onChange={this.handleChange} value={this.state.lineThreeData} />
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
                </tbody>
              </Table>
              </form>
              </div>
            </p>
        </div>
      );
  }
}