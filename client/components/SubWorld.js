import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deUmlauter } from '../helpers';

class SubWorld extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    const {subtheme} = this.props;
    const divStyle = {
      backgroundImage: `url(${subtheme.avatar_url})`
    };
    return (
      <Link to={`/game?theme=${deUmlauter(subtheme.name)}`} className={`world_subtheme ${deUmlauter(subtheme.name)} ${subtheme.status}`}>
        <div className='img_container' style={divStyle}>
          <h2><span>{subtheme.name}</span></h2>
        </div>
        <div className='data_container'>
          <span className='level_container'>
            <p>best</p>
            <h4>{subtheme.best_spree}</h4>
          </span>
          <span className={`status_container`}>
            <p>lost</p>
            <h4>{subtheme.games_lost}</h4>     
          </span>
          <span className='points_container'>
            <p>coins</p>
            <h4>{subtheme.coins}</h4>
          </span>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(SubWorld);