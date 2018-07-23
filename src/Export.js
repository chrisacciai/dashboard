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
        const pdf = new jsPDF({
          orientation: 'landscape'
        });
        var width = pdf.internal.pageSize.width;
        var height = pdf.internal.pageSize.height;

        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        // pdf.output('dataurlnewwindow');
        pdf.save("dashboardMasterView.pdf");
      })
    ;
  }

  render() {
    return (<div>
      <div>
        <button onClick={this.printDocument}>Print</button>
      </div>
      <div id="divToPrint" className="mt4">
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