import React, { Component } from "react";
import { connect } from "react-redux";
import p5 from "p5";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import Board from "./Board";

const BoardContainer = tw.div`w-full mx-auto`;

class BoardConatiner extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myP5 = new p5(
      Board(this.myRef.current.clientWidth, this.myRef.current.clientHeight),
      this.myRef.current
    );
  }

  componentDidUpdate() {
    this.myP5.draw();
  }

  render() {
    return <BoardContainer ref={this.myRef} />;
  }
}

const stateObserver = (state) => state;
export default connect(stateObserver)(BoardConatiner);
