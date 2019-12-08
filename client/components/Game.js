import React from 'react';
import { connect } from 'react-redux';
import { fetchGameData } from '../actions/game';
import { fetchGermanGame } from '../actions/germanGame';

import GameNav from './GameNav';
// import GameContainer from './GameContainer';
import GameHangman from './GameHangman';

class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(fetchGermanGame());
    const subtheme = window.location.search.replace("?theme=", "");
    this.props.dispatch(fetchGameData(subtheme));
  }

  gameNav = () => {
    let subtheme = this.props.gameData.subtheme;
    if(typeof subtheme !== 'undefined') {
      return(<GameNav subtheme={subtheme.id} />)
    }
  }

  render() {
    let subtheme = this.props.gameData.subtheme;
    if(typeof subtheme !== 'undefined') {
      return (
        <div id="game">
          <GameNav subthemeId={subtheme.id} />
          <GameHangman subthemeId={subtheme.id} />
        </div>
      )
    } else {
      return(<div>Kein Spiel!</div>)
    }

  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData,
    subThemes: state.subThemes
  }
}
export default connect(mapStateToProps)(Game);