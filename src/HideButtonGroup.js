import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

/* PROPS
  displayText: string
*/

/* STATE
  numClicks: int
*/

export default class HideButtonGroup extends Component {
  // constructor
  constructor() {
		super();
		this.state = {
			shown: true,
		};
	}	

  // other metohds
	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

  // render method
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button onClick={this.toggle.bind(this)}>Edit Data</Button>
          <Button>Update</Button>
        </ButtonGroup>
      </div>
    );
  }
}