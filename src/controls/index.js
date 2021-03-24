import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from './control';

import { 
  addControl,
  controlError,
} from '../store/actions';

const Container = styled.div`
  overflow-y: auto;
  background: linear-gradient(to bottom, #9368E9 0%, #943bea 100%);
  background-size: 150% 150%;
  flex-grow: 1;
  max-height: 100%;
  height: auto;
	width: 260px;
	text-transform: uppercase; 
	opacity: 0.63;
`


class state extends Component {

  constructor(props) {
    super(props);
    this.state = {
      labels : ["Factor", "Axiom", "Rule 1", "Rule 2", "Start X", "Start Y", "Len", "Angle", "Thickness", "Iterations"]
    }
  }

  render() {
    const allLables = this.state.labels.map(val => {
      const name = val.replaceAll(' ', '').toLowerCase();
      return <Button key = {name} name = {name} label={val} data = {this.props[name]} changeHandler = {this.props.addControl}/>;
    });
    return (
      <Container>
        {allLables}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
	return {
    factor : state.factor, 
    axiom : state.axiom, 
    rule1 : state.rule1, 
    rule2 : state.rule2, 
    startx : state.startx, 
    starty : state.starty, 
    iterations : state.iterations, 
    len : state.len, 
    angle : state.angle, 
    thickness : state.thickness,
    error : state.error
	};
};

export default connect(mapStateToProps, {
  addControl,
  controlError,
})(state);
