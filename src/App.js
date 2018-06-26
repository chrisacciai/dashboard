import React, { Component } from 'react';
import logo from './logo.svg';
import {BarChart, RadialBarChart, RadialBar, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './App.css';

const data = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data2 = [
  {name: '18-24', uv: 31.47, pv: 2400, fill: '#8884d8'},
  {name: '25-29', uv: 26.69, pv: 4567, fill: '#83a6ed'},
  {name: '30-34', uv: 15.69, pv: 1398, fill: '#8dd1e1'},
  {name: '35-39', uv: 8.22, pv: 9800, fill: '#82ca9d'},
  {name: '40-49', uv: 8.63, pv: 3908, fill: '#a4de6c'},
  {name: '50+', uv: 2.63, pv: 4800, fill: '#d0ed57'},
  {name: 'unknow', uv: 6.67, pv: 4800, fill: '#ffc658'}
];

const style = {
  top: 0,
  left: 350,
  lineHeight: '24px'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Corporate Dashboard Beta</h1>
        </header>
      <div class = "row">
        <div class = "column">
          <BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>

          <RadialBarChart width={500} height={300} cx={150} cy={150} innerRadius={20} outerRadius={140} barSize={10} data={data2}>
          <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='uv'/>
          <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style}/>
          </RadialBarChart>
        </div>
        <div class = "column">
          <LineChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
