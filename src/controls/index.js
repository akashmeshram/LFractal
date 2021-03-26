import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./control";

import { addControl, controlError } from "../store/actions";

import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as ArrowLeftIcon } from "./Arrows/arrow-left-3-icon.svg";
import { ReactComponent as ArrowRightIcon } from "./Arrows/arrow-right-3-icon.svg";

const Container = styled.div`
  ${tw`w-full h-full max-w-sm flex flex-col px-6 sm:px-10 lg:px-6 py-10 justify-between shadow-raised bg-primary text-gray-100 relative overflow-y-auto opacity-75`}
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  h3 {
    ${tw`text-xl sm:text-2xl font-bold`}
  }
  h4 {
    ${tw`mx-3 h-4 text-3xl`}
  }
  input {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const Controls = styled.div`
  ${tw`mx-auto flex py-5 mt-6`}
`;
const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full bg-gray-200 hover:bg-gray-300 text-primary hover:text-secondary focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

const SubContainer = tw.div`flex flex-col`;
const RowContainer = tw.div`flex justify-between`;

class state extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [
        "Factor",
        "Axiom",
        "Rule 1",
        "Rule 2",
        "Start X",
        "Start Y",
        "Len",
        "Angle",
        "Thickness",
        "Iterations",
      ],
    };
    this.decreaseIter = this.decreaseIter.bind(this);
    this.increaseIter = this.increaseIter.bind(this);
  }

  decreaseIter() {
    if (this.props.iterations.value > this.props.iterations.min)
      this.props.addControl("iterations", this.props.iterations.value - 1);
  }

  increaseIter() {
    if (this.props.iterations.value < this.props.iterations.max)
      this.props.addControl("iterations", this.props.iterations.value + 1);
  }

  render() {
    const allLables = this.state.labels.reduce((data, val) => {
      const name = val.replaceAll(" ", "").toLowerCase();
      return {
        ...data,
        [name]: (
          <Button
            key={name}
            name={name}
            label={val}
            data={this.props[name]}
            changeHandler={this.props.addControl}
          />
        ),
      };
    }, {});

    const RulesComponent = (
      <SubContainer>
        <h3>L - System Rules</h3>
        <RowContainer>
          {allLables["factor"]}
          {allLables["axiom"]}
        </RowContainer>
        <RowContainer>
          {allLables["rule1"]}
          {allLables["rule2"]}
        </RowContainer>
      </SubContainer>
    );

    const PositionsComponent = (
      <SubContainer>
        <h3>Start Positions</h3>
        <RowContainer>
          {allLables["startx"]}
          {allLables["starty"]}
        </RowContainer>
      </SubContainer>
    );

    const ParametersComponent = (
      <SubContainer>
        <h3>Parameters</h3>
        <RowContainer>
          {allLables["len"]}
          {allLables["angle"]}
          {/* {allLables["thickness"]} */}
        </RowContainer>
      </SubContainer>
    );

    const IterationComponent = (
      <SubContainer>
        <h3>Iteration</h3>
        <Controls>
          <ControlButton onClick={this.decreaseIter}>
            <ArrowLeftIcon />
          </ControlButton>
          <h4>{this.props.iterations.value}</h4>
          <ControlButton onClick={this.increaseIter}>
            <ArrowRightIcon />
          </ControlButton>
        </Controls>
      </SubContainer>
    );
    return (
      <Container>
        <h2>Controls</h2>
        {RulesComponent}
        {PositionsComponent}
        {ParametersComponent}
        {IterationComponent}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    factor: state.factor,
    axiom: state.axiom,
    rule1: state.rule1,
    rule2: state.rule2,
    startx: state.startx,
    starty: state.starty,
    iterations: state.iterations,
    len: state.len,
    angle: state.angle,
    thickness: state.thickness,
    error: state.error,
  };
};

export default connect(mapStateToProps, {
  addControl,
  controlError,
})(state);
