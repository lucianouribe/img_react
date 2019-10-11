import React from 'react';
import { connect } from 'react-redux';

import { fetchGermanGame } from '../actions/germanGame';

class Deutsch extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      worlds: []
    }
  }

  componentDidMount(){
    this.props.dispatch(fetchGermanGame());
  }


  worlds = () => {
    let worldThemes = this.props.germanGame.world_themes;
    if(typeof worldThemes !== 'undefined') {
      return worldThemes.map(theme => {
        return(<div>{theme}</div>)
      })
    }
  }
  
  render() {
    const player = this.props.germanGame;
    return (
      <div id="deutsch">
        <p>Lifes: {player.lifes}</p>
        <p>Points: {player.punctuation}</p>
        <p>Total points: {player.punctuation_4_total}</p>
        <p>Level: {player.level}</p>
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