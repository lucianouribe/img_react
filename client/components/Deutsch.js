import React from 'react';
import { connect } from 'react-redux';
import { fetchGermanGame } from '../actions/germanGame';
import World from './World';
import PlayerStats from './PlayerStats';

class Deutsch extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(fetchGermanGame());
  }

  worlds = () => {
    let worldThemes = this.props.germanGame.world_themes;
    if(typeof worldThemes !== 'undefined') {
      return worldThemes.map((theme, i) => {
        return(<World key={i} theme={theme[0]} picture={theme[1]}/>)
      })
    }
  }
  
  render() {
    const player = this.props.germanGame;
    return (
      <div id="deutsch">
        <PlayerStats player={player} />
        <div className="worlds-container">
          {this.worlds()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    germanGame: state.germanGame
  }
}
export default connect(mapStateToProps)(Deutsch);