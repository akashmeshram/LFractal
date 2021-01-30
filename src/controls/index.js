import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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

const Wrapper = styled.div`
  color: #FFFFFF;
  margin: 5px 15px;
  padding: 10px 15px;	
  border-radius: 4px;
  line-height: 30px;
  font-size: 12px;
  font-weight: 600;
  text-align: left;
  :hover {
    background: rgba(255, 255, 255, 0.63);
    color: black;
  }
`;

const Input = styled.input`
  width: 70%;
  padding: 6px 12px;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
  appearance: textfield;
  :hover {
    border-color: #000;
    color: #000;
  }
`;

class state extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Wrapper>
          Factor : 
          <Input name = "factor" {...this.props.factor} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          Axiom : 
          <Input name = "axiom" {...this.props.axiom} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          Rule 1: 
          <Input name = "rule1" {...this.props.rule1} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          Rule 2 : 
          <Input name = "rule2" {...this.props.rule2} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          StartX : 
          <Input name = "startx" {...this.props.startx} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          StartY : 
          <Input name = "starty" {...this.props.starty} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          Length : 
          <Input name = "len" {...this.props.len} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          Angle : 
          <Input name = "angle" {...this.props.angle} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          Thickness : 
          <Input name = "thickness" {...this.props.thickness} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
        <Wrapper>
          Iteration : 
          <Input name = "iterations" {...this.props.iterations} onChange={(e) => this.props.addControl(e.target.name, e.target.value)}/>
        </Wrapper>
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
