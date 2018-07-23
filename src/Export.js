import React, {Component} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import M_Chart1 from './OpsCharts/M_Chart1.js';
import M_Chart2 from './OpsCharts/M_Chart2.js';
import M_Chart3 from './OpsCharts/M_Chart3.js';

export default class Export extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
    return (<div>
      <div className="mb5">
        <button onClick={this.printDocument}>Print</button>
      </div>
      <div id="divToPrint" className="mt4" {...css({
        backgroundColor: '#f5f5f5',
        width: '210mm',
        minHeight: '297mm',
        marginLeft: 'auto',
        marginRight: 'auto'
      })}>
        <div>
          <div class = "MasterHeader">
            <p className = "MasterText">
              Operations
            </p>
          </div>
          <div class = "row">
            <div class = "columnThirds">
              <M_Chart1/>
            </div>
            <div class = "columnThirds">
              <M_Chart2/>
            </div>
            <div class = "columnThirds">
              <M_Chart3/>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}