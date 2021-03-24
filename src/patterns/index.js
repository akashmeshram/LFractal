import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {addAllControls} from '../store/actions';
import yaml from 'js-yaml';
import file from './data.yml';

const Container = styled.div`
  min-height: 0;
  max-height: 100%;
  height: auto;
  width: 260px;
  text-transform: uppercase; 
  opacity: 0.83;
  background: linear-gradient(to bottom, #FB404B 0%, #bb0502 100%);
  background-size: 150% 150%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: 'Source Code Pro', monospace;
`

const Button = styled.button`
  font-family: 'Source Code Pro', monospace;
  cursor: pointer;
  letter-spacing: 1px;
  padding: 4px 20px;
  font-size: 12px;
  display: inline-block;
  font-weight: 500;
  line-height: 1.7em;
  margin-right: 15px;
  text-transform: uppercase;
  border: 1px solid #4C4C4C;
  color: #4C4C4C;
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  :hover {
    outline: 0;
    color: #fff !important;
    background-color: #1b30fc !important;
    border: 1px solid #fff !important;
  }

`;

class Patterns extends Component {

  state ={
    data : []
  }

  componentDidMount() {
    fetch(file)
      .then(response => response.text())
      .then(text => {
        const data = yaml.load(text);
        this.setState({data});
        ;
      })
      .catch(err => console.error(err));
  }

  render() {
    const allPatterns = this.state.data.map((val, id) => <Button key={id} onClick={() => this.props.addAllControls(val)}>{val.name}</Button>);
    return (
      <Container>
        <h1>Patterns </h1>
        {allPatterns}
      </Container>
    );
  }
}

export default connect(null, {addAllControls})(Patterns);