import {Table} from 'react-bootstrap';
import React, { Component } from 'react';

const data = [
    {month: 'Jan-18', pv: 74},
    {month: 'Feb-18', pv: 87},
    {month: 'Mar-18', pv: 92},
    {month: 'Apr-18', pv: 112},
    {month: 'May-18', pv: 160},
    {month: 'MTD 6/18/18', pv: 136},
  ];

export default class Table1 extends Component {
      render() {
        return (
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
                        <td>Jan-18</td>
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
        );
    }
}
