import React from 'react';
import { connect } from 'react-redux';
import { fetchGameData } from '../actions/game';

import GameNav from './GameNav';
import GameContainer from './GameContainer';

class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      subtheme: ''
    }
  }
  componentDidMount(){
    const subtheme = window.location.search.replace("?theme=", "");
    this.setState({subtheme});
    this.props.dispatch(fetchGameData(subtheme))
  }

  gameNav = () => {
    let subtheme = this.props.gameData.subtheme;
    if(typeof subtheme !== 'undefined') {
      return(<GameNav subtheme={subtheme} />)
    }
  }

  render() {
    return (
      <div id="game">
        {this.gameNav()}
        <GameContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData
  }
}
export default connect(mapStateToProps)(Game);