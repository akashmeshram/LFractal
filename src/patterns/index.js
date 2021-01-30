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
  opacity: 0.63;
  background: linear-gradient(to bottom, #FB404B 0%, #bb0502 100%);
  background-size: 150% 150%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const Button = styled.button`
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin: 0.5em 0.3em ;
  border-radius:0.12em;
  width: 80%;
  box-sizing: border-box;
  text-decoration:none;
  background: transparent;
  text-align: center;
  :hover {
    cursor: pointer;
    color:#000000;
    background: #FFFFFF;
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