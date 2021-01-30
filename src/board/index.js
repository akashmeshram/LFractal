import React, { Component } from 'react';
import { connect } from 'react-redux';
import p5 from 'p5';

import Board from './board';

class BoardConatiner extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myP5 = new p5(Board, this.myRef.current);
  }

  componentDidUpdate() {
    this.myP5.draw();
  }

  render() {
    return (
      <div ref={this.myRef} />
    )
  }
}

const stateObserver = (state) => state;


export default connect(stateObserver)(BoardConatiner);
