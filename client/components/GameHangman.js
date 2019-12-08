import React from 'react';
import { connect } from 'react-redux';
import { history } from '../store';
import Markdown from 'markdown-to-jsx';

import GameSubNav from './GameSubNav';
import GameLogic from './GameLogic';
import { deUmlauter } from '../helpers';
import { updateGame } from '../actions/germanGame'
import { updateWorldPoints } from '../actions/themes'
import { updateSubthemePoints } from '../actions/subThemes'

class GameHangman extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      actual: 0,
      actualIndex: 0,
      actualObject: {},
      actualThematic: 'words',
      actualLevel: 0,
      subthemeImage: '',
      show: true,
      passedGames: 0,
      showTotal: false,
      totalCard: ''
    }
  }

  gameSubNav = () => {
    let subtheme = this.props.gameData.subtheme;
    let subthemeName;
    let amount;
    if(typeof subtheme !== 'undefined') {
      subthemeName = subtheme.name;
      amount  = this.getAmount(this.props.gameData)

      return(
        <GameSubNav 
          subthemeName={subthemeName}
          subthemeHearts={this.state.passedGames}
          amount={amount}
          actual={this.state.actual} />
      )
    }
  }

  resetGame = () => {
    $.ajax({
      url: `api/reset`,
      type: 'PUT',
    }).done( data => {
      console.log('reset Game success', data);
      history.push("/deutsch")
    }).fail( err => {
      console.log('reset Game fail', err);
      history.push("/deutsch")
    });
  }

  getAmount = (gameData) => {
    let word_length = gameData.words.length
    let verb_length = gameData.verbs.length
    let phrase_length = gameData.phrases.length
    return word_length + verb_length + phrase_length
  }

  // sets how many hints are left
  setGamesPassed = (passedGames) => {
    this.setState({passedGames})
  }

  // pass the punctuation to the user
  passPunctuation = () => {
    console.log('pass punctuation')
  }

  startGame = () => {
    let gameData = this.props.gameData;
    let words = gameData.words;
    let actualObject = words[0];
    // console.log(gameData, words, actualObject)
    this.setState({
      actualObject, 
      subthemeImage: gameData.subtheme_img, 
      actualLevel: gameData.subtheme.level,
      show: false
    });
  }

  nextGame = () => {
    let {words, verbs, phrases} = this.props.gameData;
    // console.log(words, verbs, phrases)
    let {actualIndex, actual, actualThematic} = this.state;
    console.log('words', actualIndex, actual, actualThematic, this.props.gameData)
    if(actualThematic === 'words'){
      if(actualIndex + 1 < words.length){
        console.log('there are more words');
        let actualObject = words[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1});
      } else {
        let actualObject = verbs[0];
        if (typeof actualObject !== 'undefined'){
          console.log('pass to verbs');
          this.setState({actualIndex: 0, actualObject, actualThematic: 'verbs', actual: actual + 1});
        } else {
          this.passPunctuation();
        }
      }
    }

    if(actualThematic === 'verbs'){
      if(actualIndex + 1 < verbs.length){
        console.log('there are more verbs');
        let actualObject = verbs[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1});
      } else {
        console.log('pass to punctuation');
        // let actualObject = phrases[0];
        // if (typeof actualObject !== 'undefined'){
        //   console.log('pass to phrases');
        //   this.setState({actualIndex: 0, actualObject, actualThematic: 'phrases', actual: actual + 1});
        // } else {
        //   console.log('pass to punctuation');
          this.passPunctuation();
        // }
      }
    }

  }

  gameLogic = () => {
    const {actualObject, actualLevel, actualThematic} = this.state;
    return( 
      <GameLogic 
        compareMe={actualObject} 
        actualLevel={actualLevel}
        thematic={actualThematic}
        nextGame={this.nextGame}
        passedGames={this.state.passedGames}
        setGamesPassed={this.setGamesPassed}
        subthemeId={this.props.subthemeId} 
        resetGame={this.resetGame} /> 
      )
  }

  swapViews = () => {
    if (this.state.show) {
      return(
        <div className="start-me" onClick={() => this.startGame()}>
          <h1>Anfang!</h1>
        </div>
      )
    } else {
      return(
        <div>
          {this.gameSubNav()}
          <div className={`game-image hang-${this.props.fails}`}></div>
          {this.gameLogic()}
        </div>
      )

    }
  }

  renderGameOrResult = () => {
    if (this.state.showResult) {
      return (
        <div className="game-comparer markdown" onClick={() => this.setState({showResult: false})}>
          <Markdown>{this.state.resultCard}</Markdown>
        </div>
      )
    } else if (this.state.showTotal){
      return (
        <div className="game-comparer markdown" onClick={() => history.push("/deutsch")}>
          <Markdown>{this.state.totalCard}</Markdown>
        </div>
      )
    } else {
      return this.swapViews()
    }
  }
  
  render() {
    return (
      <div className="game-container">
        {this.renderGameOrResult()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    gameData: state.gameData,
    subThemes: state.subThemes,
    germanGame: state.germanGame,
    fails: state.fails
  }
}
export default connect(mapStateToProps)(GameHangman);