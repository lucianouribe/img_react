import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import IdiomaSelector from './IdiomaSelector';
import { setQueVeo } from '../actions/queVeo';

import Stuff from '../Stuff';
import Portada from '../Portada';

class HomeTwo extends Component {

  constructor() {
    super();

    this.state = {
      slideInfo: {}
    };
  }

  componentDidMount() {

  }


  render() {
    let info = this.props.idiomas;
    return (
      <div>
        This is a cool website
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas,
    queVeo: state.queVeo
  }
}

export default connect(mapStateToProps)(HomeTwo);
