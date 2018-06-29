import React, {Component} from 'react';

export default class Test extends Component {
      render() {
        return (
            <RadialBarChart width={730} height={250} innerRadius="10%" outerRadius="80%" data={data} startAngle={180} endAngle={0}>
            <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
            <Tooltip />
            </RadialBarChart>            
        );
    }
}