import React, { Component } from 'react';
import logo from './logo.svg';
import {BarChart, Radar, Brush, ReferenceLine, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, RadialBarChart, RadialBar, LineChart, AreaChart, Area, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './App.css';
import Chart1 from './Chart1.js';


const data7 = [
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

const data3 = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

const data4 = [
  {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
  {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
  {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
  {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
  {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
  {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data5 = [
  {name: '1', uv: 300, pv: 456},
  {name: '2', uv: -145, pv: 230},
  {name: '3', uv: -100, pv: 345},
  {name: '4', uv: -8, pv: 450},
  {name: '5', uv: 100, pv: 321},
  {name: '6', uv: 9, pv: 235},
  {name: '7', uv: 53, pv: 267},
  {name: '8', uv: 252, pv: -378},
  {name: '9', uv: 79, pv: -210},
  {name: '10', uv: 294, pv: -23},
  {name: '12', uv: 43, pv: 45},
  {name: '13', uv: -74, pv: 90},
  {name: '14', uv: -71, pv: 130},
  {name: '15', uv: -117, pv: 11},
  {name: '16', uv: -186, pv: 107},
  {name: '17', uv: -16, pv: 926},
  {name: '18', uv: -125, pv: 653},
  {name: '19', uv: 222, pv: 366},
  {name: '20', uv: 372, pv: 486},
  {name: '21', uv: 182, pv: 512},
  {name: '22', uv: 164, pv: 302},
  {name: '23', uv: 316, pv: 425},
  {name: '24', uv: 131, pv: 467},
  {name: '25', uv: 291, pv: -190},
  {name: '26', uv: -47, pv: 194},
  {name: '27', uv: -415, pv: 371},
  {name: '28', uv: -182, pv: 376},
  {name: '29', uv: -93, pv: 295},
  {name: '30', uv: -99, pv: 322},
  {name: '31', uv: -52, pv: 246},
  {name: '32', uv: 154, pv: 33},
  {name: '33', uv: 205, pv: 354},
  {name: '34', uv: 70, pv: 258},
  {name: '35', uv: -25, pv: 359},
  {name: '36', uv: -59, pv: 192},
  {name: '37', uv: -63, pv: 464},
  {name: '38', uv: -91, pv: -2},
  {name: '39', uv: -66, pv: 154},
  {name: '40', uv: -50, pv: 186}
];

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
          <br/>
          <Chart1/>

          <RadialBarChart width={500} height={500} cx={200} cy={250} innerRadius={20} outerRadius={140} barSize={10} data={data2}>
          <RadialBar minAngle={15} label={{ position: 'insideStart', fill: '#fff' }} background clockWise={true} dataKey='uv'/>
          <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
          </RadialBarChart>

          <AreaChart width={600} height={400} data={data4} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
          <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
          <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
          </AreaChart>
        </div>
        <div class = "column">
          <br/>
          <LineChart width={600} height={300} data={data7}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>

          <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data3}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          </RadarChart>

          <BarChart width={600} height={300} data={data5} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
          <ReferenceLine y={0} stroke='#000'/>
          <Brush dataKey='name' height={30} stroke="#8884d8"/>
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
      </div>
    );
  }
}

export default App;