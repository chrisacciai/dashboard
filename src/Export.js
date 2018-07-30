import React, {Component} from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import MChart1 from './OpsCharts/MChart1.js';
import MChart2 from './OpsCharts/MChart2.js';
import MChart3 from './OpsCharts/MChart3.js';
import MChart4 from './OpsCharts/MChart4.js';
import MChart5 from './OpsCharts/MChart5.js';
import MChart6 from './OpsCharts/MChart6.js';
import FMChart1 from './FinanceCharts/FMChart1.js';
import FMChart2 from './FinanceCharts/FMChart2.js';
import FMChart3 from './FinanceCharts/FMChart3.js';
import FMChart4 from './FinanceCharts/FMChart4.js';
import FMChart5 from './FinanceCharts/FMChart5.js';
import FMChart6 from './FinanceCharts/FMChart6.js';
import FMChart7 from './FinanceCharts/FMChart7.js';
import RDMChart1 from './R&DCharts/RDMChart1.js';
import RDMChart2 from './R&DCharts/RDMChart2.js';
import MBDChart1 from './BDCharts/MBDChart1.js';
import MBDChart2 from './BDCharts/MBDChart2.js';
import MBDChart3 from './BDCharts/MBDChart3.js';
import MBDChart4 from './BDCharts/MBDChart4.js';
import MHRChart1 from './HRCharts/MHRChart1.js';
import MHRChart2 from './HRCharts/MHRChart2.js';
import MPMOChart from './PMOCharts/MPMOChart.js';
import MSChart from './SafetyCharts/MSChart.js';
import {Button, FormControl, ButtonGroup} from 'react-bootstrap';
import logo from './logo-dark.png'
import firebase from './Firebase.js';

export default class Export extends Component {
  constructor(props) {
    super(props);
    this.state = {
      week: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const dataRef = firebase.database().ref('weekData');
    const monthDataPair = {
      week: this.state.week,
    }
    dataRef.set(monthDataPair);
  }

  componentDidMount() {
    const dataRef = firebase.database().ref('weekData');
    dataRef.on('value', (snapshot) => {
      let items = snapshot.val();

      this.setState({
        week: items.week,
      });
    });
  }

  printDocument() {
    const page1 = document.getElementById('testDiv');
    html2canvas(page1)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape'
        });
        pdf.addImage(imgData, 'JPEG',0, 0, {pagesplit: true});  
        });
    ;
  }

  makePDF() {
    const page1 = document.getElementById('divToPrint');
    html2canvas(page1)
      .then((canvas) => {
          // suppose your picture is already in a canvas

          var imgData = canvas.toDataURL('image/png');

          /*
          Here are the numbers (paper width and height) that I found to work. 
          It still creates a little overlap part between the pages, but good enough for me.
          if you can find an official number from jsPDF, use them.
          */
          var imgWidth = 297; 
          var pageHeight = 210;  
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
          var position = 0;

          var doc = new jsPDF('landscape', 'mm');

          doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;

          while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            doc.addPage();
            doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
          }
          doc.save('test.pdf');
        });
    ;
  }

  render() {
    return (
    <div>
      <ButtonGroup className="Button1">
        <Button type="submit" bsStyle="primary" form="weekForm">Set Date</Button>
        <Button onClick={this.makePDF} bsStyle="primary">Export as PDF</Button>
      </ButtonGroup>
      <form id="weekForm" onSubmit={this.handleSubmit}>
        <FormControl bsStyle="small" className="week-button" type="text" name="week" onChange={this.handleChange} value={this.state.week}/>
      </form>
      <div id="divToPrint" className="mt4">
          <div id="master-header">
            <div class= "logo-master">
              <img src={logo} alt="logo"/>
            </div>
              <h1 className="master-week">Corporate Dashboard Week of {this.state.week}</h1>
          </div>
          <br/>
          <div class = "MasterTitle">
            <p className = "MasterText">
              Operations
            </p>
          </div>
          <div class = "row">
            <div class = "columnThirds">
              <MChart1/>
              <MChart4/>
            </div>
            <div class = "columnThirds">
              <MChart2/>
              <MChart5/>
            </div>
            <div class = "columnThirds">
              <MChart3/>
              <MChart6/>
            </div>
          </div>
          <div class = "MasterTitle">
            <p className = "MasterText">
              Finance
            </p>
          </div>
          <div class = "row">
            <div class = "columnThirds">
              <FMChart1/>
              <FMChart4/>
              <div class = "MasterFiller">
              </div>
              <FMChart7/>
            </div>
            <div class = "columnThirds">
              <FMChart2/>
              <FMChart5/>
              <div class = "MasterTitle2">
                <p className = "MasterText">
                  Research &amp; Development
                </p>
              </div>
              <RDMChart1/>
            </div>
            <div class = "columnThirds">
              <FMChart3/>
              <FMChart6/>
              <div class = "MasterFiller">
              </div>
              <RDMChart2/>
            </div>
          </div>
          <div class = "MasterTitle">
            <p className = "MasterText">
              Business Development
            </p>
          </div>
          <div class = "row">
            <div class = "columnThirds">
              <MBDChart1/>
              <div class = "MasterFiller">
              </div>
              <MBDChart4/>
              <div class = "MasterTitle3">
                <p className = "MasterText">
                  PMO
                </p>
              </div>
              <MPMOChart/>
            </div>
            <div class = "columnThirds">
              <MBDChart2/>
              <div class = "MasterTitle2">
                <p className = "MasterText">
                  Human Resources
                </p>
              </div>
              <MHRChart1/>
              <div class = "MasterTitle3">
                <p className = "MasterText">
                  Safety
                </p>
              </div>
              <MSChart/>
            </div>
            <div class = "columnThirds">
              <MBDChart3/>
              <div class = "MasterFiller">
              </div>
              <MHRChart2/>
            </div>
        </div>
      </div>
    </div>);
  }
}