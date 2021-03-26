import React, { Component } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { connect } from "react-redux";

import { addAllControls } from "../store/actions";
import yaml from "js-yaml";
import file from "./data.yml";

const Container = styled.div`
  ${tw`w-full h-full max-w-sm flex flex-col px-6 sm:px-10 lg:px-6 py-10 justify-between shadow-raised bg-secondary text-gray-100 relative overflow-y-auto  opacity-75`}
  h2 {
    ${tw`mr-auto text-3xl sm:text-4xl font-bold`}
  }
`;

const Button = tw.h3`mr-auto px-6 py-3 text-gray-100 rounded-full font-bold border-transparent tracking-wide hover:bg-gray-100 hover:text-primary hover:cursor-pointer`;

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
      <Button key={id} onClick={() => this.props.addAllControls(val)}>
        {val.name}
      </Button>
    ));
    return (
      <Container>
        <h2>Patterns </h2>
        {allPatterns}
      </Container>
    );
  }
}

export default connect(null, { addAllControls })(Patterns);
