import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import IdiomaSelector from './IdiomaSelector';
import { setQueVeo } from '../actions/queVeo';

import Locale from '../Locale';
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
    const title = Locale[`${info}`].cool_website.split('');
    const theTitle = []
    title.forEach((letter, index) => theTitle.push(<div key={index}>{letter}</div>));

    return (
      <div>
        <div className="home-part-1">
          <span className="cool-website">{theTitle}</span>
        </div>
        <div className="home-part-2">Luciano Uribe Piedrahita</div>
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
