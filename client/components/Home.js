import React, { Component } from 'react';
import { connect } from 'react-redux';
import Introduction from './Introduction';
import Locale from '../Locale';

class Home extends Component {

  constructor() {
    super();

    this.state = {
      slideInfo: {}
    };
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
        <Introduction />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    idiomas: state.idiomas,
  }
}

export default connect(mapStateToProps)(Home);
