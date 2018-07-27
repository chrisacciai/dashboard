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
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape'
        });
        pdf.addImage(imgData, 'JPEG', 0, 0);
        pdf.save('corporateDashboardPDF');
      })
    ;
  }

  render() {
    return (
    <div>
      <ButtonGroup className="Button1">
        <Button type="submit" bsStyle="primary" form="weekForm">Set Date</Button>
        <Button onClick={this.printDocument} bsStyle="primary">Export as PDF</Button>
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
        <div id="divToPrint" className="mt4">
          <br/>
          <div class = "MasterTitle">
            <p className = "MasterText">
              Finance
            </p>
          </div>
          <div class = "rowThirds">
            <div class = "columnThirds">
              <FMChart1/>
              <FMChart2/>
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
    </div>);
  }
}