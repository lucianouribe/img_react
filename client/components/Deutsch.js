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
        return(<World key={i} theme={theme}/>)
      })
    }
  }
  
  render() {
    const player = this.props.germanGame;
    const title = 'Deutsch Spiel'
    return (
      <div id="deutsch">
        <PlayerStats player={player} title={title}/>
        {this.worlds()}
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