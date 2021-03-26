import React, { Component } from "react";
import { connect } from "react-redux";
import { changeControl, controlError } from "../store/actions";

import {
  Container,
  ContainerLabel,
  SubContainer,
  SubContainerLabel,
  RowContainer,
  Arrows,
  ArrowButton,
  ControlButton,
  CounterLabel,
} from "./Components";
import { ReactComponent as ArrowLeftIcon } from "./Arrows/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "./Arrows/arrow-right.svg";

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
      this.props.changeControl("iterations", this.props.iterations.value - 1);
  }

  increaseIter() {
    if (this.props.iterations.value < this.props.iterations.max)
      this.props.changeControl("iterations", this.props.iterations.value + 1);
  }

  render() {
    const allLables = this.state.labels.reduce((data, val) => {
      const name = val.replaceAll(" ", "").toLowerCase();
      return {
        ...data,
        [name]: (
          <ControlButton
            key={name}
            name={name}
            label={val}
            data={this.props[name]}
            changeHandler={this.props.changeControl}
          />
        ),
      };
    }, {});

    const RulesComponent = (
      <SubContainer>
        <SubContainerLabel> L - System Rules </SubContainerLabel>
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
        <SubContainerLabel> Start Positions </SubContainerLabel>
        <RowContainer>
          {allLables["startx"]}
          {allLables["starty"]}
        </RowContainer>
      </SubContainer>
    );

    const ParametersComponent = (
      <SubContainer>
        <SubContainerLabel> Parameters </SubContainerLabel>
        <RowContainer>
          {allLables["len"]}
          {allLables["angle"]}
          {/* {allLables["thickness"]} */}
        </RowContainer>
      </SubContainer>
    );

    const IterationComponent = (
      <SubContainer>
        <SubContainerLabel>Iteration</SubContainerLabel>
        <Arrows>
          <ArrowButton onClick={this.decreaseIter}>
            <ArrowLeftIcon />
          </ArrowButton>
          <CounterLabel> {this.props.iterations.value} </CounterLabel>
          <ArrowButton onClick={this.increaseIter}>
            <ArrowRightIcon />
          </ArrowButton>
        </Arrows>
      </SubContainer>
    );
    return (
      <Container>
        <ContainerLabel>Controls</ContainerLabel>
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
  changeControl,
  controlError,
})(state);
