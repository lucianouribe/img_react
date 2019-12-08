import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deUmlauter } from '../helpers';

class World extends React.Component {

  constructor(props) {
    super(props);
  }

  getWorldData = (theme) => {
    const worlds = this.props.germanGame.worlds;

    let level;
    let points;
    let status;
    if(typeof worlds !== 'undefined') {
      worlds.map(world => {
        if(world.name === theme) {
          level = world.level
          points = world.points
          status = world.status
        }
      })
      return(
        <div className='data_container'>
          <span className='level_container'>
            <p>level</p>
            <h4>{level}</h4>
          </span>
          <span className={`status_container ${status}`}></span>
          <span className='points_container'>
            <p>punkt</p>
            <h4>{points}</h4>
          </span>
        </div>
      )
    }
  }

  render() {
    const {theme, picture} = this.props;
    const divStyle = {
      backgroundImage: `url(${picture})`
    };
    return (
      <Link to={`/subthemes?theme=${deUmlauter(theme)}`} className={`world_theme ${deUmlauter(theme)}`}>
        <div className='img_container' style={divStyle}>
          <h2><span>{theme}</span></h2>
        </div>
        {this.getWorldData(theme)}
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