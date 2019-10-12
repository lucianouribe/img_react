import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deUmlauter } from '../helpers';

class World extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const theme = this.props.theme;
    return (
      <Link to={`/subthemes?theme=${deUmlauter(theme)}`} className={`world_theme ${deUmlauter(theme)}`}>
        <div className='img_container'>
          <h2><span>{theme}</span></h2>
        </div>
        <div className='data_container'>
          <span className='level_container'></span>
          <span className='points_container'></span>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    germanGame: state.germanGame,
    subThemes: state.subThemes
  }
}
export default connect(mapStateToProps)(World);