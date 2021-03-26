import React, { Component } from "react";
import { connect } from "react-redux";

import { addAllControls } from "../store/actions";
import yaml from "js-yaml";
import file from "./data.yml";
import { Container, ContainerLabel, PatternLabel } from "./Components";

class Patterns extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch(file)
      .then((response) => response.text())
      .then((text) => {
        const data = yaml.load(text);
        this.setState({ data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const allPatterns = this.state.data.map((val, id) => (
      <PatternLabel key={id} onClick={() => this.props.addAllControls(val)}>
        {val.name}
      </PatternLabel>
    ));
    return (
      <Container>
        <ContainerLabel>Patterns </ContainerLabel>
        {allPatterns}
      </Container>
    );
  }
}

export default connect(null, { addAllControls })(Patterns);
