import React from 'react';
import { connect } from 'react-redux';
import { history } from '../store';
import Markdown from 'markdown-to-jsx';

import GameSubNav from './GameSubNav';
import GameImage from './GameImage';
// import GameComparer from './GameComparer';
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
      hintCounter: 0,
      showResult: false,
      showTotal: false,
      resultCard: '',
      totalCard: ''
    }
  }
  
  setResult = () => {
    this.setState({showResult: true})
  }
  
  // the result card is a string with all the divs! or a markdown thing!
  setResultCard = (resultCard) => {
    this.setState({resultCard})
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
          actual={this.state.actual}
          hintCounter={this.state.hintCounter} />
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
  hintMagik = (hintCounter) => {
    this.setState({hintCounter})
  }

  // pass the punctuation to the user
  passPunctuation = () => {
    this.setState({showTotal: true});

    // get subthemes
    let theSubTheme;
    const {subThemes, subthemeId} = this.props;
    for (const subT of subThemes) {
      if (subT.id === subthemeId) {
        theSubTheme = subT;
      }
    }
    // get points of specific subtheme
    const subthemePoints = theSubTheme.points;

    // get player data
    const player = this.props.germanGame;
    const playerLifes = player.lifes;
    const playerPunctuation = player.punctuation;
    const playerTotal = player.punctuation_4_total;

    // get actual theme!!!!!!!
    const theThemeName = theSubTheme.theme;
    let theTheme;
    // get theme id!
    for (const t of player.worlds) {
      if (deUmlauter(t.name) === theThemeName) {
        theTheme = t;
      }
    }

    let subthemeTotalPoints = 0;
    let themeTotalPoints = 0;
    let playerTotalPoints = 0;

    subthemeTotalPoints = subthemePoints
    // if points are negative player looses one life
    if (subthemePoints < 0) {
      // console.log('player losses one life');
      if (playerLifes - 1 > 0){
        this.props.dispatch(updateGame(player.id, playerLifes - 1, playerPunctuation + subthemePoints, player.punctuation_4_total + subthemePoints, player.level));
        playerTotalPoints = subthemePoints;
      }
      // console.log('subtheme stats reset');
      this.props.dispatch(updateSubthemePoints(theSubTheme.id, 0, theSubTheme.level));
      // console.log('theme gets -20 points');
      this.props.dispatch(updateWorldPoints(theTheme.id, theTheme.points - 50, theTheme.level ));
      themeTotalPoints = -50;
      // console.log('if level > 1 then loose a level');
      if (theSubTheme.level > 1){
        this.props.dispatch(updateSubthemePoints(theSubTheme.id, 0, theSubTheme.level - 1));
      }
    } else {
      if (subthemePoints < 70) {
        // console.log('theme gets 20 points');
        this.props.dispatch(updateWorldPoints(theTheme.id, theTheme.points + 10, theTheme.level ));
        themeTotalPoints = 10;
        // console.log('player wins 15 points');
        if (playerLifes > 0){
          this.props.dispatch(updateGame(player.id, playerLifes, playerPunctuation + 10, player.punctuation_4_total + subthemePoints, player.level));
          playerTotalPoints = 10;
        }
      } else {
        // console.log('theme gets 50 points');
        this.props.dispatch(updateWorldPoints(theTheme.id, theTheme.points + 25, theTheme.level ));
        themeTotalPoints = 25;
        // console.log('player wins 15 points');
        this.props.dispatch(updateGame(player.id, playerLifes, playerPunctuation + 15, player.punctuation_4_total + subthemePoints, player.level));
        playerTotalPoints = 15;
        // console.log('if subtheme points more than 70 -> pass level, reset points to 0')
        this.props.dispatch(updateSubthemePoints(theSubTheme.id, 0, theSubTheme.level + 1));
        if (subthemePoints > 100) {
          // console.log('if subtheme points more than 100 -> extra points go to the player points');
          this.props.dispatch(updateGame(player.id, playerLifes, playerPunctuation + subthemePoints - 100, player.punctuation_4_total, player.level));
          playerTotalPoints += (subthemePoints - 100);
        }
      }
    }
    // if () {
    //   console.log('once all subthemes are passed, theme changes status, player gets extra 100 points');
    // }

    if (playerPunctuation > 1000){
      // console.log('if player gets more than 1000 points, he gets a life. && player points get 1000 points less');
      this.props.dispatch(updateGame(player.id, playerLifes + 1, playerPunctuation - 1000, player.punctuation_4_total, player.level));
    }

    if (playerTotal > 5000){
      // console.log('player gets 2 lifes, player total looses 5000');
      this.props.dispatch(updateGame(player.id, playerLifes + 2, playerPunctuation, player.punctuation_4_total - 5000, player.level));
    }
    // game over, reset player stats
    if (playerLifes - 1 <= 0){
      this.resetGame()
    }

    // console.log('show punctuation');
    let totalCard;
    if (playerLifes - 1 <= 0){
      totalCard = '# Game Over!'
    } else {
      totalCard =  '# Total \n' + '###' + theSubTheme.name + ': ' + subthemeTotalPoints + ' points\n' + '###' + theThemeName + ': ' + themeTotalPoints + ' points\n' + '### player: ' + playerTotalPoints + ' points\n' +  '### lifes: ' + playerLifes + '\n';
    }

    this.setState({totalCard});
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
    if(actualThematic === 'words'){
      if(actualIndex + 1 < words.length){
        let actualObject = words[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1});
      } else {
        let actualObject = verbs[0];
        if (typeof actualObject !== 'undefined'){
          this.setState({actualIndex: 0, actualObject, actualThematic: 'verbs', actual: actual + 1});
        } else {
          this.passPunctuation();
        }
      }
    }

    if(actualThematic === 'verbs'){
      if(actualIndex + 1 < verbs.length){
        let actualObject = verbs[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1});
      } else {
        let actualObject = phrases[0];
        if (typeof actualObject !== 'undefined'){
          this.setState({actualIndex: 0, actualObject, actualThematic: 'phrases', actual: actual + 1});
        } else {
          this.passPunctuation();
        }
      }
    }

    if(actualThematic === 'phrases'){
      if(actualIndex + 1 < phrases.length){
        let actualObject = phrases[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1});
      } else {
        this.passPunctuation();
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

  // gameComparer = () => {
  //   const {actualObject, actualLevel, actualThematic} = this.state;
  //   return( 
  //     <GameComparer 
  //       compareMe={actualObject} 
  //       actualLevel={actualLevel}
  //       thematic={actualThematic}
  //       nextGame={this.nextGame}
  //       hintCounter={this.state.hintCounter}
  //       hintMagik={this.hintMagik}
  //       setResult={this.setResult}
  //       setResultCard={this.setResultCard} 
  //       subthemeId={this.props.subthemeId} 
  //       resetGame={this.resetGame} /> 
  //     )
  // }
  gameLogic = () => {
    const {actualObject, actualLevel, actualThematic} = this.state;
    return( 
      <GameLogic 
        compareMe={actualObject} 
        actualLevel={actualLevel}
        thematic={actualThematic}
        nextGame={this.nextGame}
        hintCounter={this.state.hintCounter}
        hintMagik={this.hintMagik}
        setResult={this.setResult}
        setResultCard={this.setResultCard} 
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
          {this.gameImage()}
          {/* {this.gameComparer()} */}
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
    germanGame: state.germanGame
  }
}
export default connect(mapStateToProps)(GameHangman);