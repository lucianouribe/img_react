import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deUmlauter } from '../helpers';

class World extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let theme = this.props.theme;
    return (
      <Link to={`/subthemes?theme=${deUmlauter(theme)}`} className="world_theme">
        <h2><span>{theme}</span></h2>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    germanGame: state.germanGame
  }
}
export default connect(mapStateToProps)(World);