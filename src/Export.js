import React, {Component} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import MChart1 from './OpsCharts/MChart1.js';
import MChart2 from './OpsCharts/MChart2.js';
import MChart3 from './OpsCharts/MChart3.js';
import MChart4 from './OpsCharts/MChart4.js';
import {Button} from 'react-bootstrap';

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape'
        });
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save('dataurlnewwindow');
      })
    ;
  }

  render() {
    return (<div> <Button className="Button1" onClick={this.printDocument} bsStyle="primary">Export as PDF</Button>
      <div id="divToPrint" className="mt4">
        <div>
          <div class = "MasterHeader">
            <p className = "MasterText">
              Operations
            </p>
          </div>
          <div class = "rowThirds">
            <div class = "columnThirds">
              <MChart1/>
              <MChart4/>
            </div>
            <div class = "columnThirds">
              <MChart2/>
            </div>
            <div class = "columnThirds">
              <MChart3/>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}