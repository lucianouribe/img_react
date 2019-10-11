import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class World extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const theme = this.props.theme;
    return (
      <div className="world_theme">
        <h2><Link to={`/subthemes?theme=${theme}`}><span>{theme}</span></Link></h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    germanGame: state.germanGame
  }
}
export default connect(mapStateToProps)(World);