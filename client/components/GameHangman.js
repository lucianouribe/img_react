import React from 'react';
import { connect } from 'react-redux';
import { history } from '../store';
import Markdown from 'markdown-to-jsx';

import GameSubNav from './GameSubNav';
import GameLogic from './GameLogic';

import { updateGame } from '../actions/germanGame'
import { updateSubthemePoints } from '../actions/subThemes'
import { letters } from '../actions/letters'
import { fails } from '../actions/fails'

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
      totalCard: '',
      cardAnswer: []
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
          subthemeBest={this.state.passedGames}
          amount={amount}
          actual={this.state.actual} />
      )
    }
  }

  setCardAnswer = (cardAnswer) => {
    this.setState({cardAnswer});
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
    // console.log('words', actualIndex, actual, actualThematic, this.props.gameData)
    if(actualThematic === 'words'){
      if(actualIndex + 1 < words.length){
        console.log('there are more words');
        let actualObject = words[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1 });
      } else {
        let actualObject = verbs[0];
        if (typeof actualObject !== 'undefined'){
          console.log('pass to verbs');
          this.setState({actualIndex: 0, actualObject, actualThematic: 'verbs', actual: actual + 1 });
        } else {
          this.resolveWin();
        }
      }
    }

    if(actualThematic === 'verbs'){
      if(actualIndex + 1 < verbs.length){
        console.log('there are more verbs');
        let actualObject = verbs[actualIndex + 1];
        this.setState({actualIndex: actualIndex + 1, actualObject, actual: actual + 1 });
      } else {
        console.log('pass to punctuation');
        // let actualObject = phrases[0];
        // if (typeof actualObject !== 'undefined'){
        //   console.log('pass to phrases');
        //   this.setState({actualIndex: 0, actualObject, actualThematic: 'phrases', actual: actual + 1});
        // } else {
        //   console.log('pass to punctuation');
          this.resolveWin();
        // }
      }
    }

  }

  resolveWin = () => {
    this.setState({showTotal: true, resultMessage: 'Thema Bestanden!'});
    // get subthemes
    const theSubTheme = this.getSubtheme();

    // set best_spree & close subtheme
    if (this.state.passedGames > theSubTheme.best_spree) {
      this.props.dispatch(updateSubthemePoints(theSubTheme.id, 10, 'closed', this.state.passedGames + 1, theSubTheme.games_lost));
    } else {
      this.props.dispatch(updateSubthemePoints(theSubTheme.id, 10, 'closed', theSubTheme.best_spree + 1, theSubTheme.games_lost));
    }
    // get player data
    const player = this.props.germanGame;
    const playerLifes = player.lifes;
    const playerPunctuation = player.punctuation;
    // win one life
    this.props.dispatch(updateGame(player.id, playerLifes + 1, playerPunctuation + 1, player.punctuation_4_total + 1, player.level));
  }

  getSubtheme = () => {
    let theSubTheme;
    const {subThemes, subthemeId} = this.props;
    for (const subT of subThemes) {
      if (subT.id === subthemeId) {
        theSubTheme = subT;
      }
    }
    return theSubTheme;
  }

  resolveDeath = () => {
    this.setState({showTotal: true, resultMessage: 'Du bist tot!'});

    // get subthemes
    const theSubTheme = this.getSubtheme();

    // set best_spree
    if (this.state.passedGames > theSubTheme.best_spree) {
      this.props.dispatch(updateSubthemePoints(theSubTheme.id, 10, 'lost', this.state.passedGames + 1, theSubTheme.games_lost + 1 ));
    } else {
      this.props.dispatch(updateSubthemePoints(theSubTheme.id, 10, 'lost', theSubTheme.best_spree, theSubTheme.games_lost + 1));
    }

    // get player data
    const player = this.props.germanGame;
    const playerLifes = player.lifes;
    const playerPunctuation = player.punctuation;

    this.props.dispatch(letters(''));
    this.props.dispatch(fails(0));
    // loose one life
    if (playerLifes > 1) {
      this.props.dispatch(updateGame(player.id, playerLifes - 1, playerPunctuation, player.punctuation_4_total + 1, player.level));
    } else {
      this.setState({resultMessage: 'Game Over!'});
      // this.props.dispatch(updateGame(player.id, 3, 0, 0, 1));
      // this.props.dispatch(updateSubthemePoints(theSubTheme.id, 10, 'open', 0));
      // create an action to reset all subthemes and all themes
      this.resetGame();
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
        resolveDeath={this.resolveDeath}
        passedGames={this.state.passedGames}
        setGamesPassed={this.setGamesPassed}
        subthemeId={this.props.subthemeId} 
        resetGame={this.resetGame} 
        passedGames={this.state.passedGames} 
        setCardAnswer={this.setCardAnswer} /> 
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

  result = () => {
    const {subtheme} = this.props.gameData;
    if (this.state.passedGames > subtheme.best_spree) {
      return `
        ${this.state.cardAnswer[0]}\r\n
        ${this.state.cardAnswer[1]}\r\n
        \n
        ${this.state.resultMessage}\r\n
        ${subtheme.name}\r\n
        New Record: ${this.state.passedGames} !!!\r\n
        Lifes: ${this.props.germanGame.lifes}
      `
    } else {
      return `
        ${this.state.cardAnswer[0]}\r\n
        ${this.state.cardAnswer[1]}\r\n
        \n
        ${this.state.resultMessage}\r\n
        ${subtheme.name}\r\n
        Level Record: ${subtheme.best_spree}\r\n
        Current Spree: ${this.state.passedGames}\r\n
        Lifes: ${this.props.germanGame.lifes}
    `
    }
  }

  acceptFate = () => {
    this.setState({showTotal: false});
    history.push("/deutsch");
  }

  renderGameOrResult = () => {
    if (this.state.showTotal) {
      return (
        <div className="game-comparer markdown" onClick={() => this.acceptFate()}>
          <Markdown>{this.result()}</Markdown>
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