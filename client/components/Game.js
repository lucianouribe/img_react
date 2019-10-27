import React from 'react';
import { connect } from 'react-redux';
import { fetchGameData } from '../actions/game';

import GameNav from './GameNav';
import GameContainer from './GameContainer';

class Game extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
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
          <GameContainer subthemeId={subtheme.id} />
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