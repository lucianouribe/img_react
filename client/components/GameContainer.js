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
    let words = this.props.gameData.words;
    let actualObject = words[0];
    this.setState({actualObject, subthemeImage: this.props.gameData.subtheme_img});
  }

  nextGame = () => {
    let {words, verbs, phrases} = this.props.gameData;
    if(this.state.actualThematic === 'words'){
      if(this.state.actualIndex + 1 < words.length){
        let actualObject = words[this.state.actualIndex + 1];
        this.setState({actualIndex: this.state.actualIndex + 1, actualObject, actual: this.state.actual + 1});
        console.log(actualObject.noun);
      } else {
        let actualObject = verbs[0];
        this.setState({actualIndex: 0, actualObject, actualThematic: 'verbs', actual: this.state.actual + 1});
        console.log(actualObject.infinitive);
      }
    }

    if(this.state.actualThematic === 'verbs'){
      if(this.state.actualIndex + 1 < verbs.length){
        let actualObject = verbs[this.state.actualIndex + 1];
        this.setState({actualIndex: this.state.actualIndex + 1, actualObject, actual: this.state.actual + 1});
        console.log(actualObject.infinitive);
      } else {
        let actualObject = phrases[0];
        this.setState({actualIndex: 0, actualObject, actualThematic: 'phrases', actual: this.state.actual + 1});
        console.log(actualObject.phrase_praesens);
      }
    }

    if(this.state.actualThematic === 'phrases'){
      if(this.state.actualIndex + 1 < phrases.length){
        let actualObject = phrases[this.state.actualIndex + 1];
        this.setState({actualIndex: this.state.actualIndex + 1, actualObject, actual: this.state.actual + 1});
        console.log(actualObject.phrase_praesens);
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
    return( 
      <GameComparer 
        compareMe={this.state.actualObject} 
        thematic={this.state.actualThematic} /> 
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