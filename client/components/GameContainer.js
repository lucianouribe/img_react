import React from 'react';
import { connect } from 'react-redux';

import GameSubNav from './GameSubNav';
import GameImage from './GameImage';
import GameComparer from './GameComparer';

class GameContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      actual: 0,
      subtheme: {},
      words: [],
      verbs: [],
      phrases: []
    }
  }

  componentDidMount(){
  }

  gameSubNav = () => {
    let subtheme = this.props.gameData.subtheme;
    let subthemeName;
    let subthemeHearts;
    let amount;
    if(typeof subtheme !== 'undefined') {
      subthemeName = subtheme.name;
      subthemeHearts = subtheme.hearts;
      amount  = this.getAmount(this.props.gameData)

      return(
        <GameSubNav 
          subthemeName={subthemeName}
          subthemeHearts={subthemeHearts}
          amount={amount}
          actual={this.state.actual} />
      )
    }
  }

  getAmount = (gameData) => {
    let word_length = gameData.words.length
    let verb_length = gameData.verbs.length
    let phrase_length = gameData.phrases.length
    return word_length + verb_length + phrase_length
  }

  gameImage = () => {
    return( <GameImage /> )
  }

  gameComparer = () => {
    return( <GameComparer /> )
  }
  
  render() {
    return (
      <div className="game-container">
        {this.gameSubNav()}
        {this.gameImage()}
        {this.gameComparer()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData
  }
}
export default connect(mapStateToProps)(GameContainer);