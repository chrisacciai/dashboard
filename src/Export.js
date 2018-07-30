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
    const page1 = document.getElementById('divToPrint');
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

    var quotes = document.getElementById('testDiv');

    html2canvas(quotes, {
        onrendered: function(canvas) {

        //! MAKE YOUR PDF
        var pdf = new jsPDF('p', 'pt', 'letter');

        for (var i = 0; i <= quotes.clientHeight/980; i++) {
            //! This is all just html2canvas stuff
            var srcImg  = canvas;
            var sX      = 0;
            var sY      = 980*i; // start 980 pixels down for every new page
            var sWidth  = 900;
            var sHeight = 980;
            var dX      = 0;
            var dY      = 0;
            var dWidth  = 900;
            var dHeight = 980;

            window.onePageCanvas = document.createElement("canvas");
            onePageCanvas.setAttribute('width', 900);
            onePageCanvas.setAttribute('height', 980);
            var ctx = onePageCanvas.getContext('2d');
            // details on this usage of this function: 
            // https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images#Slicing
            ctx.drawImage(srcImg,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight);

            // document.body.appendChild(canvas);
            var canvasDataURL = onePageCanvas.toDataURL("image/png", 1.0);

            var width         = onePageCanvas.width;
            var height        = onePageCanvas.clientHeight;

            //! If we're on anything other than the first page,
            // add another page
            if (i > 0) {
                pdf.addPage(612, 791); //8.5" x 11" in pts (in*72)
            }
            //! now we declare that we're working on that page
            pdf.setPage(i+1);
            //! now we add content to that page!
            pdf.addImage(canvasDataURL, 'PNG', 20, 40, (width*.62), (height*.62));

        }
        //! after the for loop is finished running, we save the pdf.
        pdf.save('Test.pdf');
      }
    });
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
      <div id="testDiv">
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
          <div class = "rowThirds">
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
        </div>
        <br/>
        <div id="divToPrint" className="mt4">
          <div class = "MasterTitle">
            <p className = "MasterText">
              Finance
            </p>
          </div>
          <div class = "rowThirds">
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
        </div>
        <br/>
        <div id="divToPrint" className="mt4">
          <div class = "MasterTitle">
            <p className = "MasterText">
              Business Development
            </p>
          </div>
          <div class = "rowThirds">
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
      </div>
    </div>);
  }
}