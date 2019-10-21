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
      actualIndex: 0,
      actualObject: {},
      actualThematic: 'words',
      actualLevel: 0,
      subthemeImage: ''
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

  startGame = () => {
    let gameData = this.props.gameData;
    let words = gameData.words;
    let actualObject = words[0];
    this.setState({
      actualObject, 
      subthemeImage: gameData.subtheme_img, 
      actualLevel: gameData.subtheme.level
    });
  }

  nextGame = () => {
    let {words, verbs, phrases} = this.props.gameData;
    let {actualIndex, actual, actualThematic} = this.state;
    if(actualThematic === 'words'){
      if(actualIndex + 1 < words.length){
        let actualObject = words[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1});
      } else {
        let actualObject = verbs[0];
        this.setState({actualIndex: 0, actualObject, actualThematic: 'verbs', actual: actual + 1});
      }
    }

    if(actualThematic === 'verbs'){
      if(actualIndex + 1 < verbs.length){
        let actualObject = verbs[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1});
      } else {
        let actualObject = phrases[0];
        this.setState({actualIndex: 0, actualObject, actualThematic: 'phrases', actual: actual + 1});
      }
    }

    if(actualThematic === 'phrases'){
      if(actualIndex + 1 < phrases.length){
        let actualObject = phrases[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1});
      } else {
        console.log('time to evaluate results!')
      }
    }

  }

  gameImage = () => {
    return( 
      <GameImage
        compareMe={this.state.actualObject} 
        subthemeImage={this.state.subthemeImage} /> 
    )
  }

  gameComparer = () => {
    const {actualObject, actualLevel, actualThematic} = this.state;
    return( 
      <GameComparer 
        compareMe={actualObject} 
        actualLevel={actualLevel}
        thematic={actualThematic} /> 
      )
  }
  
  render() {
    return (
      <div className="game-container">
        {this.gameSubNav()}
        {this.gameImage()}
        {this.gameComparer()}
        <button onClick={() => this.startGame()}>start</button>
        <button onClick={() => this.nextGame()}>next</button>
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